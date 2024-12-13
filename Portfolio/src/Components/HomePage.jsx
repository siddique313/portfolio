import Sidebar from "./Sidebar";
import Cards from "./Cards";
import Header from "./Header";
import Pics from "./Pics";
import Technical from "./Technical";
import Rates from "./Rates";
import Contact from "./Contact";
import Footer from "./Footer";
import Powered from "./Powered";
import ThreeLine from "./ThreeLine";
import { useState } from "react";

export default function HomePage() {
  const [hideShow,setHideShow] = useState(false)

  return (
    <section className="relative">
      <section className="fixed ">
        <Sidebar hideShow={hideShow} setHideShow={setHideShow} />
      </section>
      <section className="ml-0 lg:ml-60 bg-slate-100 ">
        <ThreeLine hideShow={hideShow} setHideShow={setHideShow}/>
        <Header />
        <Cards />
        <Pics />
        <Technical />
        <Rates />
        <Contact />
        <Footer />
        <Powered />
      </section>
    </section>
  );
}
