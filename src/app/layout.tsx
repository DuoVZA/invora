import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const codeFont = localFont({
  src: "../../public/fonts/CascadiaCode-VariableFont_wght.ttf",
  variable: "--font-code",
});

export const metadata = {
  title: "Invora",
  description: "Invora Games Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className={`relative min-h-screen w-full bg-zinc-50 ${codeFont.className} ${codeFont.variable}`}>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}