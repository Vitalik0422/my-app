import "./globals.css";
import Header from "@/components/Header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>
        <header>
          <Header/>
        </header>
          {children}
      </body>
    </html>
  );
}
