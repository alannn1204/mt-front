import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import Footer from "./components/Footer";
import CardCarousel from "./components/CardCarousel";
import "./globals.css";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-white text-center px-6 md:px-0 min-h-[80vh] bg-gradient-to-tl from-rose-900 to-rose-600">

        <h1 className="font-sans font-bold mb-4 mt-10 md:mt-20 text-[clamp(2.5rem,5vw,4.5rem)]">
          Start Traveling Now
        </h1>

        <p className="font-sans mb-8 text-lg md:text-md max-w-xl">
            Best Routes at the Best Prices with us. - <b><i>MyTicketBus</i></b>
        </p>

        <SearchBox />
      </section>

      {/* Card Carousel Section */}
      <section className="py-12 bg-gray-50">
        <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Popular Routes
            </h2>
            <p className="text-gray-600 mt-2">
              Check out our most traveled bus routes
            </p>
        </div>

  <CardCarousel />
</section>


      <Footer />
    </div>
  );
}
