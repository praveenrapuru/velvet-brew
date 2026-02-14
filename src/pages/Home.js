import Hero from "../components/sections/Hero";
import StatsCounter from "../components/sections/StatsCounter";
import MenuSection from "../components/sections/MenuSection";
import BookingForm from "../components/sections/BookingForm";

// home page
function Home() {
  return (
    <main>
      <Hero />
      <StatsCounter />
      <MenuSection />
      <BookingForm />
    </main>
  );
}

export default Home;
