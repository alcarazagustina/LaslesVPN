import Home from "./assets/components/home";
import NavBar from "./assets/components/navBar";
import Features from "./assets/components/features";
import Plan from "./assets/components/planCards";
import Mapa from "./assets/components/map";
import Carrousel from "./assets/components/carrouselCards";
import Form from "./assets/components/form";
import Footer from "./assets/components/footer";


export const BDD_URL = "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com";

function App() {

  
  return (

    <div className="">
      <NavBar></NavBar>
      <Home></Home>
      <Features></Features>
      <Plan></Plan>
      <Mapa></Mapa>
      <Carrousel></Carrousel>
      <Form></Form>
      <Footer></Footer>
      
    </div>

  );
}

export default App;
