# Next.js Project Rules & Guidelines (App Router)

## 1) Project Structure

```
src/
│
├── app/                  # Routing (App Router)
│   ├── layout.tsx
│   ├── page.tsx
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── dashboard/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   └── api/              # Route Handlers (server-only endpoints)
│
├── components/           # Reusable UI components (Client/Server components)
│   ├── ui/
│   └── common/
│
├── services/             # API client layer (fetch/axios wrappers)
├── hooks/                # Custom hooks (client-only when using React hooks)
├── lib/                  # Helpers, config
├── store/                # State management (client-only)
├── types/                # TypeScript types
├── constants/            # Constants
└── styles/               # Styling
```

## 2) Naming Conventions

### File & Folder

- Component: PascalCase → `UserCard.tsx`
- Hook: `useSomething` → `useAuth.ts`
- Service: `something.service.ts`
- Folder:
  - `components/`, `services/`, `hooks/` dùng `kebab-case`
  - `app/` folders theo Next.js conventions: `dashboard`, `(group)`, `[id]`, `@slot`, v.v.

### Variables & Functions

```ts
const userName = "Minh";

function getUserData() {}
```

## 3) Component Rules

### Keep components small

- Mỗi component chỉ nên làm 1 việc
- Ưu tiên tách UI ra khỏi logic (hook / service)

### Client vs Server Components

- Mặc định trong `app/` là Server Component (không dùng hook như `useState`, `useEffect`)
- Nếu cần hook/event handler, phải thêm `"use client"` ở đầu file

## 4) Data Fetching & API Layer (Quan trọng)

### Không gọi API trực tiếp trong Client UI

Sai (Client Component):

```tsx
"use client";

import { useEffect } from "react";

export default function Profile() {
  useEffect(() => {
    fetch("/api/user");
  }, []);

  return null;
}
```

Đúng (Client Component + service + hook):

```ts
// services/user.service.ts
export async function getUser() {
  const res = await fetch("/api/user");
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
}
```

```ts
// hooks/useUser.ts
import { useEffect, useState } from "react";
import { getUser } from "@/services/user.service";

export function useUser() {
  const [user, setUser] = useState<unknown>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    getUser()
      .then((data) => {
        if (!cancelled) setUser(data);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { user, loading };
}
```

### Server Components có thể fetch trực tiếp (khuyến nghị)

Đúng (Server Component):

```tsx
export default async function Page() {
  const res = await fetch("https://example.com/api/projects");
  const projects = await res.json();
  return <pre>{JSON.stringify(projects, null, 2)}</pre>;
}
```

Rule tóm tắt:

- Server Components: có thể `await fetch(...)` trực tiếp trong `page.tsx`, `layout.tsx`, server-only code
- Client Components: không fetch trực tiếp trong UI; gọi qua `services/` + `hooks/` (hoặc dùng React Query/SWR nếu project đã dùng)

## 5) Axios / fetch

- Server-side (App Router): ưu tiên `fetch` của Next.js để dùng cache/revalidate tốt hơn
- Client-side: có thể dùng `fetch` hoặc `axios`
- Nếu dùng `axios`:
  - Đặt instance ở `lib/axios.ts`
  - Không log token/secret

Ví dụ axios instance:

```ts
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default instance;
```

## 6) State Management

- State nhỏ: `useState`
- State lớn: Zustand / Redux
- `store/` chỉ dùng trong Client Components

Ví dụ Zustand:

```ts
import { create } from "zustand";

type AuthState = {
  user: unknown;
  setUser: (user: unknown) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
```

## 7) Styling

- Dùng TailwindCSS
- Tránh inline style

```tsx
<div className="flex items-center gap-2 p-4" />
```

## 8) Authentication

- Ưu tiên token trong cookie (HttpOnly nếu có thể)
- Tránh `localStorage` (XSS risk)
- Set/clear cookie ở server (Route Handler trong `app/api/*` hoặc server actions)
- Không expose secret qua `NEXT_PUBLIC_*`

## 9) Performance

- Ưu tiên Server Components (default)
- Lazy load khi cần (đặc biệt các component chỉ chạy client)

```tsx
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("./Chart"), { ssr: false });
```

## 10) Clean Code

Bad:

```ts
const a = 1;
const b = 2;
```

Good:

```ts
const totalUsers = 1;
const maxUsers = 2;
```

## 11) Environment Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

Rule:

- Biến dùng frontend: `NEXT_PUBLIC_`
- Secret: không dùng `NEXT_PUBLIC_`, chỉ đọc ở server

## 12) Git Rules

Commit convention:

```
feat: add login feature
fix: fix auth bug
refactor: clean auth service
```

## 13) Goal

- Code sạch
- Dễ scale
- Dễ maintain
- Chuẩn production

