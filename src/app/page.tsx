import Main from "./components/main";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-zinc-50">
      <Header></Header>
      <Main></Main>
    </div>
  );
}
