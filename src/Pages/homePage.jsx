import AllProducts from "../components/AllProducts";
import BestProducts from "../components/BestProducts";
import Category from "../components/Category";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";

const HomePage = () => {
  const { isLogin, user } = useAuth();

  return (
    <div className="">
      {isLogin && (
        <>
          <Navbar></Navbar>
          <Jumbotron></Jumbotron>
          <BestProducts></BestProducts>
          <Category></Category>
          <AllProducts></AllProducts>
          <Footer></Footer>
        </>
      )}
    </div>
  );
};

export default HomePage;
