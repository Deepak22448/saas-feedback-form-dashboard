import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://saas-feedback-form-dashboard.vercel.app"),
  title: "Nexx",
  description:
    "Easily create and integrate customizable feedback forms into your website. Register on our platform to manage projects with seamless integration",

  keywords: [
    "custom feedback form",
    "SaaS feedback solution",
    "website feedback integration",
    "Next.js feedback form",
    "TypeScript feedback form",
    "Clerk authentication",
    "Stripe payments",
    "web component feedback form",
    "project feedback management",
    "SaaS project tools",
  ],
  authors: {
    name: "Deepak Sharma",
  },
  openGraph: {
    title: "Customizable Feedback Form SaaS",
    description:
      "Register now to create projects and integrate feedback forms into your site using our SaaS platform.",
    images: "/og-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <PageHeader />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
