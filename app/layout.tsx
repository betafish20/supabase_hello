export const metadata = { title: "Supabase Hello", description: "Hello World with Supabase" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0, padding: 20, background: "#f6f6f7" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h1 style={{ fontSize: 22, marginBottom: 16 }}>Supabase Hello World</h1>
          {children}
        </div>
      </body>
    </html>
  );
}