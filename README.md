# Next.js Dashboard - A Learning Journey

This project is a hands-on application I built while following the official [Vercel Next.js tutorial](https://nextjs.org/learn). It's a full-stack dashboard that includes features for managing customers and invoices.

Building this dashboard was a fantastic way to get practical experience with some of the powerful features in Next.js. It's not just a demo; it's a testament to my learning process and my ability to grasp and apply new technologies.

## What I Learned

Through this project, I gained practical experience with:

*   **Next.js App Router:** Structuring the application with the latest routing paradigm.
*   **Server-Side Rendering (SSR):** Fetching and rendering data on the server for improved performance and SEO.
*   **Data Fetching & Mutations:** Implementing `create`, `update`, and `delete` operations for invoices.
*   **Search & Pagination:** Building dynamic and user-friendly ways to navigate data.
*   **Authentication:** Securing routes and implementing login functionality with NextAuth.js.
*   **Database Integration:** Connecting to a PostgreSQL database (using Neon) to persist data.
*   **Styling with Tailwind CSS:** Creating a modern, responsive UI from scratch.

## Tech Stack

*   **Framework:** Next.js
*   **Styling:** Tailwind CSS
*   **Authentication:** NextAuth.js
*   **Database:** PostgreSQL (via Neon)
*   **ORM:** Vercel Postgres
*   **Validation:** Zod

## Getting Started

### Prerequisites

*   Node.js (v18.17.0 or later)
*   pnpm (or npm/yarn)
*   A PostgreSQL database

### Installation & Setup

1.  **Clone the repo:**

    ```bash
    git clone https://github.com/your-username/nextjs-dashboard.git
    cd nextjs-dashboard
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

3.  **Set up environment variables:**

    Create a `.env` file in the root of the project and add your database URL and an auth secret.

    ```env
    POSTGRES_URL="your_database_url"
    AUTH_SECRET="your_auth_secret"
    ```

    *You can generate a secure `AUTH_SECRET` with: `openssl rand -base64 32`*

4.  **Run the development server:**

    ```bash
    pnpm run dev
    ```

5.  **Seed the database:**

    With the development server running, open a new terminal or your browser and hit the seed endpoint to populate your database with initial data.

    ```bash
    # Using curl
    curl http://localhost:3000/api/seed

    # Or by visiting in your browser
    http://localhost:3000/api/seed
    ```

Now, you can open [http://localhost:3000](http://localhost:3000) and explore the dashboard!

## Deployment

This app is ready to be deployed on [Vercel](https://vercel.com/), which is a great platform for hosting Next.js applications.