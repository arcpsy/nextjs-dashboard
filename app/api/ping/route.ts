import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.POSTGRES_URL!);

export async function GET() {
   try {
      await sql`SELECT 1`; // Keeps Neon warm

      return new Response("Pong ✅", {
         status: 200,
         headers: {
            "Cache-Control": "no-store",
         },
      });
   } catch (error) {
      console.error("Ping failed:", error);

      return new Response("Ping failed ❌", {
         status: 500,
         headers: {
            "Cache-Control": "no-store",
         },
      });
   }
}
