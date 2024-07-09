import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manut Smart",
  description: "Seu companheiro em manutenções programadas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        {/* Link para o manifesto */}
        <link rel="manifest" href="/manifest.json" />

        {/* Ícones para diferentes tamanhos de dispositivos */}
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/icons/icon-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="512x512"
          href="/icons/icon-512x512.png"
        />

        {/* Meta tags para definir a cor do tema */}
        <meta name="theme-color" content="#000000" />

        {/* Outras meta tags importantes para PWA */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Portal Altuori" />
        <meta name="apple-mobile-web-app-title" content="Portal Altuori" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body>{children}</body>
    </html>
  );
}
