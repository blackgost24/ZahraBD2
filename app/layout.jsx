// app/layout.jsx
import './globals.css' 

export const metadata = {
  title: "Zahra's 23rd Birthday",
  description: 'A digital timeline of 23 amazing years',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}