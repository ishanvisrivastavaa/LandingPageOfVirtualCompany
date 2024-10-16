import "./App.css";
import Navbar from "./components/Navbar";
import Herpsection from "./components/Herpsection";
import Featuresection from "./components/Featuresection";
import Workflow from "./components/Workflow";
import Pricingsection from "./components/Pricingsection";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Herpsection />
        <Featuresection />
        <Workflow />
        <Pricingsection />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}

export default App;
