import AppBar from "@/components/Common/AppBar";
import Nav from "@/components/Layout/Nav";
import LookBook from "@/components/Pages/main/details/LookBook";

export default function Page() {
  return (
    <>
      <AppBar type="ggoSunNae" title="꼬순내" />
      <div className="bg-black">
        <main className="no-scrollbar h-[calc(100vh-100px)] overflow-y-scroll pb-[80px]">
          <LookBook />
        </main>
        <Nav />
      </div>
    </>
  );
}
