export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex flex-1 justify-center items-center h-full">
        {children}
      </main>
    </>
  );
}
