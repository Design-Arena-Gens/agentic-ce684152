import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">AI Forex Bot</h1>
      <p className="text-zinc-300">Autonomous trading controller using Gemini for analysis and a local MT5 bridge for execution.</p>
      <div className="space-x-4">
        <Link href="/dashboard" className="underline">Dashboard</Link>
      </div>
    </main>
  );
}
