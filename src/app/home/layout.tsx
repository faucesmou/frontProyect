

export default function MainLayout({
     children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          hola pedro
          {/* Layout UI */}
          {/* Place children where you want to render a page or nested layout */}
          <main>{children} nada por acá</main>
        </body>
      </html>
    )
  }