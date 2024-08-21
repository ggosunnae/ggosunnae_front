import BNB from "@/components/Common/BNB";
import ItemsList from "@/components/Pages/lookbook/listmore/ItemsList";

export default function LookBookListMorePage() {
  return (
    <main className="bg-black text-white">
      <div className="no-scrollbar h-[calc(100vh-100px)] overflow-y-scroll">
        <ItemsList />

        <BNB />
      </div>
    </main>
  );
}
