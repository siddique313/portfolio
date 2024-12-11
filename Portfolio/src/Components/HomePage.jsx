import Sidebar from "./Sidebar";
import Cards from "./Cards";
import Header from "./Header";
import Pics from "./Pics";
import Technical from "./Technical";
import Rates from "./Rates";
import Contact from "./Contact";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <section className="relative ">
      <section className="fixed">
        <Sidebar />
      </section>
      <section className="ml-60 bg-slate-100 ">
        <Header />
        <Cards />
        <Pics />
        <Technical />
        <Rates />
        <Contact />
        <Footer />
      </section>
    </section>
  );
}
