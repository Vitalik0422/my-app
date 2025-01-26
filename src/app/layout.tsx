import "./globals.css";
import Header from "@/components/shared/Header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>
        <header>
          <Header />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
