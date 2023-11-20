import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";

const myFont = localFont({
  src: "./fonts/Product-Sans-Regular.ttf",
  display: "swap",
});

export const metadata = {
  title: "React exercises repository",
  description: "Useful to review react concepts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
