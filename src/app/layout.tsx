import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nodo Educativo",
  description:
    "Noticias, herramientas digitales y tecnología educativa para docentes de Chile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
