import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
    title: "My Portfolio",
    description: "Showcasing my work",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="antialiased">
        <Nav />
        <div className="mx-auto max-w-5xl px-4">{children}</div>
        <footer className="mt-16 border-t py-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Noah Schmidt — All rights reserved.
        </footer>
        </body>
        </html>
    );
}
