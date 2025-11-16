'use client';
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type Message = { id: number; content: string; created_at: string };

export default function Page() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.from('messages').select('*').order('created_at', { ascending: false }).limit(5);
      if (!error && data) setMessages(data as Message[]);
      setLoading(false);
    })();
  }, []);

  return (
    <main style={{ background: "white", padding: 16, borderRadius: 12, border: "1px solid #e5e7eb" }}>
      <p style={{ marginBottom: 12 }}>This page fetches from a public `messages` table in Supabase.</p>
      {loading ? <div>Loading…</div> : (
        <ul>
          {messages.map(m => (
            <li key={m.id} style={{ marginBottom: 8 }}>
              <code>{m.content}</code> <span style={{ color: "#6b7280", fontSize: 12 }}>({new Date(m.created_at).toLocaleString()})</span>
            </li>
          ))}
          {messages.length === 0 && <li>No messages yet.</li>}
        </ul>
      )}
    </main>
  );
}