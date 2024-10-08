import { Inter } from "next/font/google";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footers from "@/components/Footers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <nav className='sticky top-0 left-0 z-50'>
          <Navbar />
          </nav>
          <section>{children}</section>
          <footer>
            <Footers />
          </footer>
        </AntdRegistry>
      </body>
    </html>
  );
}
