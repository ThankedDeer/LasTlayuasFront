import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";

const Home = () => {
  return (
    <main className="container mx-auto">
      <Hero />
      <About />
      {/*  <Testimonial /> */}
    </main>
  );
};

export default Home;
