import type { Metadata } from "next";
import { Playfair_Display, Inter, Cinzel } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/data/config";

const playfair = Playfair_Display({
    variable: "--font-playfair",
    subsets: ["latin"],
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const cinzel = Cinzel({
    variable: "--font-cinzel",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.description}`,
    description: SITE_CONFIG.description,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr" suppressHydrationWarning>
            <body
                className={`${playfair.variable} ${inter.variable} ${cinzel.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
