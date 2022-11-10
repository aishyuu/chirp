import './globals.css'
import Navigation from './navigation';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="flex flex-grow flex-row">
        <header>
          <Navigation />
        </header>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
