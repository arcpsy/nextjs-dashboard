# Dashboard App using Next.js App Router

This project is the result of completing the official ["Next.js App Router Fundamentals"](https://nextjs.org/learn) course by Vercel. It is a full-stack application built to demonstrate the core features of the Next.js App Router.

## Key Features

*   **Dashboard:** A main page showing an overview of invoice and customer data.
*   **Invoice Management:** Pages to create, view, update, and delete invoices.
*   **Customer Pages:** A table displaying customer information.
*   **User Login:** A login system to secure the dashboard.
*   **Data Handling:** Includes functionality for searching and paginating through invoices.

## Technology Stack

*   **Framework:** Next.js
*   **Styling:** Tailwind CSS
*   **Authentication:** NextAuth.js
*   **Database:** PostgreSQL (connected via Neon)
*   **Data Validation:** Zod

## Running the Project Locally

To run this project on your own machine, follow these steps.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/nextjs-dashboard.git
    cd nextjs-dashboard
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the project's root directory and add the following:
    ```env
    POSTGRES_URL="your_database_url"
    AUTH_SECRET="your_auth_secret"
    ```
    *You can generate a secure `AUTH_SECRET` with the command: `openssl rand -base64 32`*

4.  **Seed the database:**
    This project includes an endpoint to add initial data to your database. With the server running, you can use `curl` or visit the URL in your browser.
    ```bash
    curl http://localhost:3000/api/seed
    ```

5.  **Start the development server:**
    ```bash
    pnpm run dev
    ```
    The application will be available at [http://localhost:3000](http://localhost:3000).

## Deployment

This application is configured for easy deployment on [Vercel](https://vercel.com/).
