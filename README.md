# Supabase Hello World (Next.js)

A tiny app that reads a `messages` table from Supabase and shows "Hello, world!".
Deploy to Vercel in minutes.

## 1) Create Supabase project
- Go to supabase.com → New project
- Copy your: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 2) Create table + policy
In Supabase SQL Editor, run:
```sql
-- schema.sql contents
create table if not exists messages (
  id bigserial primary key,
  content text not null default 'Hello, world!',
  created_at timestamptz default now()
);

alter table messages enable row level security;

-- Public read for demo (safe for hello-world only)
create policy public_read on messages
  for select using (true);

-- seed
insert into messages(content) values ('Hello, world! from Supabase');
```

## 3) Local dev
```bash
npm i
npm run dev
# open http://localhost:3000
```

Set env vars in a `.env.local` file:
```bash
cp .env.example .env.local
# paste your own values
```

## 4) Deploy to Vercel
- Push this folder to GitHub
- Import the repo in vercel.com → Add env vars:
  - NEXT_PUBLIC_SUPABASE_URL
  - NEXT_PUBLIC_SUPABASE_ANON_KEY
- Deploy
```