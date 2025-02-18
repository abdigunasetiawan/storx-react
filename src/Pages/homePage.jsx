import BestProducts from "../components/BestProducts";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Jumbotron></Jumbotron>
      <BestProducts></BestProducts>
    </div>
  );
};

export default HomePage;
