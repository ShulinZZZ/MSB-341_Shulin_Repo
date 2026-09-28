-- Spec 003: per-user to-do list.

create table public.todos (
  id          bigint generated always as identity primary key,
  user_id     uuid not null default auth.uid() references auth.users (id) on delete cascade,
  title       text not null check (char_length(title) between 1 and 500),
  done        boolean not null default false,
  due_date    date,
  created_at  timestamptz not null default now()
);

create index todos_user_id_idx on public.todos (user_id);

-- Each user can only see and change their own rows.
alter table public.todos enable row level security;

create policy "Users can view their own todos"
  on public.todos for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "Users can create their own todos"
  on public.todos for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

create policy "Users can update their own todos"
  on public.todos for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create policy "Users can delete their own todos"
  on public.todos for delete
  to authenticated
  using ((select auth.uid()) = user_id);
