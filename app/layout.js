import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SSCN",
  description: "SSCN MODEL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="mainbody">
        <Header />
        {children}
      </body>
    </html>
  );
}
