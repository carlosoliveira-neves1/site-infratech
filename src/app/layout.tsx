import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TechVarejo - Soluções em Tecnologia para o Varejo',
  description: 'Desenvolvimento de aplicativos, webapps, aplicativos Android e integrações especializadas para o varejo.',
  keywords: ['tecnologia', 'desenvolvimento de aplicativos', 'webapps', 'varejo', 'soluções digitais', 'integração de sistemas'],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#2563eb',
  openGraph: {
    title: 'TechVarejo - Soluções em Tecnologia para o Varejo',
    description: 'Desenvolvimento de aplicativos, webapps, aplicativos Android e integrações especializadas para o varejo.',
    url: 'https://techvarejo.com.br',
    siteName: 'TechVarejo',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechVarejo - Soluções em Tecnologia para o Varejo',
    description: 'Desenvolvimento de aplicativos, webapps, aplicativos Android e integrações especializadas para o varejo.',
    creator: '@techvarejo',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
