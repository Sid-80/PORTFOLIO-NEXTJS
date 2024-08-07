import Header from '@/app/Header';
import '../styles/globals.css';
import { Social } from '@/typing';
import { fetchSocials } from '@/utils/fetchSocials';
import Providers from './Providers';

export const metadata = {
  title: 'Portfolio | Siddharth',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body className='overflow-x-hidden bg-violet-50  dark:bg-zinc-900 overflow-y-scroll scrollbar-hide'>
          <Providers>
            
          <div>{children}</div>
          </Providers>
      </body>
    </html>
  )
}
