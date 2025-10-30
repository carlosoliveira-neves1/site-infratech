import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Infratech — Especialista em desenvolvimento de aplicativos para o varejo",
  description:
    "Infratech: especialista em desenvolvimento de aplicativos para o varejo. Webapps, Android e integrações sob medida.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Infratech — Especialista em desenvolvimento de aplicativos para o varejo",
    description:
      "Webapps, Android e integrações sob medida para o varejo.",
    type: "website",
    locale: "pt_BR",
    siteName: "Infratech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
