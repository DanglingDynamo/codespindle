import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Navbar from "~/components/navbar";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "Codespindle",
    description: "A one stop coding tutorial website",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`font-sans ${inter.variable}`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
