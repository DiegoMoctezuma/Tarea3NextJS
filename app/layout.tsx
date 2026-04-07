export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Wrapper del children</h1>
        <div style={{ border: '1px solid #000000' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
