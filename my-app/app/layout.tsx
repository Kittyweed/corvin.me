import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "corvin.me",
  description: "corvin.me personal site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Optional: Add favicon */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌈</text></svg>" />
        
        {/* Optional: Add Open Graph tags for social sharing */}
        <meta property="og:title" content="corvin.me" />
        <meta property="og:description" content="corvin.me personal site" />
        <meta property="og:type" content="website" />
      </head>
      <body className="bg-black antialiased">
        {children}
        
        {/* Optional: Add a subtle footer */}
        <footer className="fixed bottom-4 left-0 right-0 text-center">
          <p className="text-zinc-600 text-sm">corvin.me</p>
        </footer>
      </body>
    </html>
  );
}