import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Companies from "./Components/Companies";
import Guide from "./Components/Guide";
import Properties from "./Components/Properties";
import Details from "./Components/Details";
import GetStarted from "./Components/GetStarted";
import Footer from "./Components/Footer";

function App() {
  return <div style={{ position: "relative", letterSpacing: 1 }}>
    <div style={{
      position: 'fixed',
      zIndex: 100,
      top: 0,
      left: 0,
      width: "100%",
      backgroundColor: "#E6F0FF",
      letterSpacing: 1
    }}>
      <Navbar />
    </div>
    <section style={{ position: "relative", marginTop: "120px" }}>
      <Hero />
    </section>
    <section style={{ position: "relative", marginTop: "60px" }}>
      <Companies />
    </section>
    <section style={{ position: "relative" , paddingBottom: "60px",}}>
      <Guide />
    </section>
    <section style={{ position: "relative"}}>
      <Properties />
    </section>
    <section style={{ position: "relative", marginTop: "60px" }}>
      <Details />
    </section>
    <section style={{ position: "relative" }}>
      <GetStarted />
    </section>
      <Footer />

  </div>;
}

export default App;
