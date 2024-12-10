import Sidebar from "./Sidebar";
import Cards from "./Cards";
import Header from "./Header";
export default function HomePage() {
  return (
    <section className="relative">
      <section className="fixed">
        <Sidebar />
      </section>
      <section className="ml-60">
        <Header />
        <Cards />
      </section>
    </section>
  );
}
