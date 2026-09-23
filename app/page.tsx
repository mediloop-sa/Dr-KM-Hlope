import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CredentialStrip from "@/components/CredentialStrip";
import About from "@/components/About";
import Services from "@/components/Services";
import Booking from "@/components/Booking";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <CredentialStrip />
      <About />
      <Services />
      <Booking />
      <Locations />
      <Footer />
    </main>
  );
}
