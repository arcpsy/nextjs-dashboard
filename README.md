# Next.js App Router Fundamentals - Vercel Course Project

This repository contains the completed project for the "Next.js App Router Fundamentals" course by Vercel. This hands-on tutorial provided a comprehensive introduction to building a full-stack application with Next.js.

The course covered a range of essential topics, from setting up the project to deploying a production-ready application. This project serves as a practical demonstration of the concepts and skills I learned throughout the course.

## Course Modules & Key Concepts Covered

*   **Getting Started:** Initializing a new Next.js project and understanding the file structure.
*   **CSS Styling:** Using Tailwind CSS for modern and responsive design.
*   **Optimizing Fonts and Images:** Implementing custom fonts and optimizing images for performance.
*   **Creating Layouts and Pages:** Building UI with the Next.js App Router.
*   **Navigating Between Pages:** Implementing navigation with the `<Link>` component.
*   **Setting up a Database:** Connecting to a PostgreSQL database with Vercel Postgres and Neon.
*   **Fetching Data:** Using Server-Side Rendering (SSR) to fetch and display data.
*   **Static and Dynamic Rendering:** Understanding the difference and when to use each.
*   **Streaming:** Improving user experience with loading UI.
*   **Partial Prerendering (PPR):** Leveraging Next.js's experimental PPR feature.
*   **Adding Search and Pagination:** Implementing dynamic filtering and pagination.
*   **Mutating Data:** Using Server Actions to create, update, and delete invoices.
*   **Error Handling:** Adding error handling for data operations.
*   **Improving Accessibility:** Implementing best practices for accessibility.
*   **Adding Authentication:** Securing the application with NextAuth.js.
*   **Adding Metadata:** Improving SEO with metadata.

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
