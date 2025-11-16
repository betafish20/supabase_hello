-- Run this in Supabase SQL editor
create table if not exists messages (
  id bigserial primary key,
  content text not null default 'Hello, world!',
  created_at timestamptz default now()
);

alter table messages enable row level security;

-- Public read for demo purposes
drop policy if exists public_read on messages;
create policy public_read on messages
  for select using (true);

-- Seed
insert into messages(content) values ('Hello, world! from Supabase');