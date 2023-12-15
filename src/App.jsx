import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import Genres from "./components/Genres";
import BestSellers from "./components/BestSellers";
import NewArrivals from "./components/NewArrivals";
import Author from "./components/Author";
import FooterUI from "./components/FooterUI";
import DeliveryLocationDay from "./components/DeliveryLocationDay";
// import UserLogin from "./components/UserLogin";
// import UserRegister from "./components/UserRegister";
// import axios from "axios";

function App() {
  return (
    <>
      <Navbar />
      <ImageSlider />
      <Genres />
      <BestSellers />
      <NewArrivals />
      <Author />
      <FooterUI />
      <DeliveryLocationDay />
      {/* <UserLogin />
      <UserRegister /> */}
    </>
  );
}

export default App;
