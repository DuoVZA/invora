import localFont from "next/font/local";
import "./globals.css";

import Main from "./components/main";
import Header from "./components/header";
import Footer from "./components/footer";

const code = localFont({
  src: "../../public/fonts/CascadiaCode-VariableFont_wght.ttf",
  variable: "--font-code",
})

export default function Home() {
  return (
    <div className={`relative min-h-screen w-full bg-zinc-50 font-code ${code.variable}`}>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}
