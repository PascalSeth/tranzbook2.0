import { Karla } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from '@/components/theme-provider';
import { Metadata } from 'next';
import { SideBar } from './components/sidebar';
import Header from './components/header';
import PageWrapper from './components/pagewrapper';

const karla = Karla({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ['latin'],
  variable: "--font-karla"
})
export const metadata: Metadata = {
  title: "TranzBook App Admin dashboard",
  description: "admindashboard",
  icons:{
    icon:'/pictures/logo.png',
  }
}

;


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={karla.className + ' h-screen overflow-hidden'}>
        <ThemeProvider
          themes={['dark', 'custom', 'light']}
          defaultTheme='light'
          attribute="class"
          enableSystem
          disableTransitionOnChange
        >
          <>
            <SideBar />
            <div className="flex flex-col h-full w-full">
              <Header />
              <PageWrapper>{children}</PageWrapper>
            </div>
          </>
        </ThemeProvider>
      </body>
    </html>
  )
}
