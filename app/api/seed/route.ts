import bcrypt from "bcrypt";
import { neon, type NeonQueryFunction } from "@neondatabase/serverless";
import {
   invoices,
   customers,
   revenue,
   users,
} from "@/app/lib/placeholder-data";

console.log("POSTGRES_URL:", process.env.POSTGRES_URL);

// Neon HTTP client
const sql = neon(process.env.POSTGRES_URL!);

// Type for the Neon SQL client
type NeonSql = NeonQueryFunction<false, false>;

async function seedUsers(sql: NeonSql) {
   await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
   await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

   const insertedUsers = await Promise.all(
      users.map(async (user) => {
         const hashedPassword = await bcrypt.hash(user.password, 10);
         return sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
   );

   return insertedUsers;
}

async function seedInvoices(sql: NeonSql) {
   await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
   await sql`
    CREATE TABLE IF NOT EXISTS invoices (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      customer_id UUID NOT NULL,
      amount INT NOT NULL,
      status VARCHAR(255) NOT NULL,
      date DATE NOT NULL
    );
  `;

   const insertedInvoices = await Promise.all(
      invoices.map(
         (invoice) => sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
        ON CONFLICT (id) DO NOTHING;
      `
      )
   );

   return insertedInvoices;
}

async function seedCustomers(sql: NeonSql) {
   await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
   await sql`
    CREATE TABLE IF NOT EXISTS customers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;

   const insertedCustomers = await Promise.all(
      customers.map(
         (customer) => sql`
        INSERT INTO customers (id, name, email, image_url)
        VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
        ON CONFLICT (id) DO NOTHING;
      `
      )
   );

   return insertedCustomers;
}

async function seedRevenue(sql: NeonSql) {
   await sql`
    CREATE TABLE IF NOT EXISTS revenue (
      month VARCHAR(4) NOT NULL UNIQUE,
      revenue INT NOT NULL
    );
  `;

   const insertedRevenue = await Promise.all(
      revenue.map(
         (rev) => sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${rev.month}, ${rev.revenue})
        ON CONFLICT (month) DO NOTHING;
      `
      )
   );

   return insertedRevenue;
}

export async function GET() {
   try {
      // Note: @neondatabase/serverless doesn't support tx.begin()
      // So we just run these sequentially
      await seedUsers(sql);
      await seedCustomers(sql);
      await seedInvoices(sql);
      await seedRevenue(sql);

      return Response.json({ message: "Database seeded successfully" });
   } catch (error) {
      console.error("Seed error:", error);
      if (error instanceof Error) {
         console.error("Seed error stack:", error.stack);
         return Response.json({ error: error.message }, { status: 500 });
      }

      return Response.json({ error: String(error) }, { status: 500 });
   }
}
