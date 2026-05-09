"use client";

import { usePathname } from "next/navigation";

import Sidebar from "./Sidebar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLogin = pathname.startsWith("/login");

  return (
    <section className="flex flex-col md:flex-row min-h-screen w-screen">
      {!isLogin && <Sidebar />}
      <main className="bg-[#F5F6FA] grow px-9">
        {children}
      </main>
    </section>
  );
}
