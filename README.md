# SaaS Platform for Feedback Form Integration

This is the main platform that allows users to register, create projects, and integrate the feedback form web component provided by our service. The platform is built using Next.js, Drizzle ORM, Clerk for authentication, Tailwind CSS, TypeScript, and Stripe for payment processing.

## Features

- **User Registration**: Register and manage your account using Clerk for secure authentication.
- **Project Management**: Create and manage projects, each with a unique `project-id` that can be used to integrate the feedback form web component.
- **Seamless Integration**: Easily embed the feedback form in your projects with minimal configuration.
- **Payment Processing**: Integrated with Stripe for managing subscriptions and payments.
- **TypeScript Support**: Ensuring type safety across the application.
- **Tailwind CSS Styling**: Fully customizable UI with Tailwind CSS.

## Technologies Used

[![Tech Stck](https://skillicons.dev/icons?i=nextjs,typescript,supabase,postgresql,tailwindcss)](https://skillicons.dev)

- **Next.js**: Server-side rendering and static site generation.
- **Drizzle ORM**: Database management and querying.
- **Clerk**: Authentication and user management.
- **Tailwind CSS + Shadcn**: Utility-first CSS framework for styling.
- **TypeScript**: Strongly typed JavaScript for enhanced developer experience.
- **Stripe**: Payment processing for handling subscriptions.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/USER_NAME/saas-feedback-form-dashboard
   cd saas-platform
   ```

2. **Install dependencies**:

   ```bash
   yarn install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory then copy the content of `.env.example` and fill the env variables.

4. **Start the development server**:
   ```bash
   yarn dev
   ```

## Usage

### Register and Create Projects

1. **Register**: Sign up on the platform using your email or social accounts.
2. **Create a Project**: After registering, navigate to the "Projects" section and create a new project. Each project will be assigned a unique `project-id`.
3. **Integrate the Feedback Form**: Use the `project-id` to embed the feedback form component on your website as described in the [Feedback Form Component Documentation](https://github.com/Deepak22448/saas-feedback-form-widget/).

### Managing Payments

The platform integrates with Stripe to manage subscriptions. Ensure that your payment information is up-to-date to continue using the service.
