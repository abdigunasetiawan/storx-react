import AllProducts from "../components/AllProducts";
import BestProducts from "../components/BestProducts";
import Category from "../components/Category";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Jumbotron></Jumbotron>
      <BestProducts></BestProducts>
      <Category></Category>
      <AllProducts></AllProducts>
    </div>
  );
};

export default HomePage;
