import "./App.css";
import MainComp from "./component/MainComp";
import AboutUs from "./component/AboutUs";
import Gallery from "./component/Gallery";
import Tips from "./component/Tips";
import Nav from "./component/Nav.jsx";
import NeedToKnow from "./component/NeedToKnow.jsx";
import Animation from "./component/Animation.jsx";
import Faq from "./component/Faq.jsx";
import ContactUs from "./component/ContactUs.jsx";
import Footer from "./component/Footer.jsx";

function App() {
  return (
    <>
      {" "}
      {/* <div className="archery-container"> */}
      <Nav />
      <MainComp />
      <Gallery />
      <Tips />
      <NeedToKnow />
      <Animation />
      <Faq />
      <ContactUs />
      <Footer />
      {/* <AboutUs /> */}
      {/* </div>{" "} */}
    </>
  );
}

export default App;
