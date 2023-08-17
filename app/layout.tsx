import type { ReactNode } from "react";
import Link from "next/link";

interface LayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
    return (
    <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <title>Indie Music Reviews</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/reviews">Reviews</Link>
                        </li>
                        <li>
                            <Link href="/darlings">Darlings</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            {children}
            <footer>
                [footer]
            </footer>
            </body>
        </html>
    );
};
