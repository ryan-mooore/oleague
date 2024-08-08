import { Noto_Sans } from "next/font/google";
import "material-symbols";

import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${notoSans.variable} p-5 sm:p-10 font-sans flex flex-row justify-center`}
      >
        <div className="w-full max-w-screen-lg">{children}</div>
      </body>
    </html>
  );
}