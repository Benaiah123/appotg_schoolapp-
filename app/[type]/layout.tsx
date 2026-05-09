import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ type: string }>;
}>) {
  const { type } = await params;

  return (
    <section className="flex flex-col md:flex-row min-h-screen w-screen">
      <Sidebar type={type} />
      <main className="sm:bg-[#F5F6FA] bg-white grow  sm:px-9">
        <div className="space-y-6 max-w-screen">
          <Header type={type} />
          {children}
        </div>
      </main>
    </section>
  );
}
