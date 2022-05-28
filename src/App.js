
import Header from "./components/header/head";
import Service from "./components/services/services";
import Testimonial from "./components/testimonials/testimonials";
import Contact from "./components/contact-form/contact";
import Footer from "./components/footer/footer";
import Teams from "./components/teams/teams";

function App() {
  return (
   <>
   <Header></Header>
   <Service></Service>
   <Teams></Teams>
   <Testimonial></Testimonial>
   <Contact></Contact>
   <Footer></Footer>
   </>
  );
}

export default App;
