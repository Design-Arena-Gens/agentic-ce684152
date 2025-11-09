import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Forex Bot',
  description: 'Autonomous AI Forex trading controller',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 text-zinc-100">{children}</body>
    </html>
  );
}
