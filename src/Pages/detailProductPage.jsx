import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/product.service";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";

function DetailProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { isLogin, user } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      const product = await getProduct(id);
      setProduct(product);
    };
    fetchData();
  }, []);

  if (isLogin) {
    return (
      <>
        <Navbar></Navbar>
        <div className="container mx-auto mt-[calc(56px+16px)] flex min-h-[calc(100vh-(64px+16px+58px))] flex-col gap-y-4 px-4 md:px-8 lg:flex-row lg:items-center lg:justify-center lg:gap-x-8 xl:mt-[calc(64px+16px)] xl:px-16">
          {Object.keys(product).length > 0 && (
            <>
              <div className="h-72 w-full lg:w-96">
                <img
                  className="product-image mx-auto h-full w-full object-contain lg:mx-0"
                  src={product.image}
                  alt=""
                />
              </div>
              <div className="h-px w-full bg-slate-200 lg:hidden"></div>
              <div className="lg:max-w-xl">
                <h1 className="product-title text-2xl font-bold text-slate-800">{product.title}</h1>
                <p className="mt-1 text-lg font-bold text-slate-700">
                  <span className="product-price">$ {product.price}</span>
                </p>
                <p className="product-description mt-2 font-medium text-slate-700">{product.description}</p>
                <div className="mt-4 flex gap-x-2">
                  <button className="group flex flex-shrink-0 items-center gap-x-4 rounded-md border-2 border-slate-900 p-4 transition-colors duration-100 hover:bg-slate-900">
                    <svg
                      className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-plus transition-colors duration-100 group-hover:stroke-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        stroke="none"
                        d="M0 0h24v24H0z"
                        fill="none"
                      />
                      <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                      <path d="M12.5 17h-6.5v-14h-2" />
                      <path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5" />
                      <path d="M16 19h6" />
                      <path d="M19 16v6" />
                    </svg>
                    <span className="hidden font-medium transition-colors duration-100 group-hover:text-white lg:inline">Add to cart</span>
                  </button>
                  <button className="w-full rounded-md bg-slate-900 px-3 py-2.5 text-lg font-medium text-white transition-colors duration-100 hover:bg-slate-900 active:outline active:outline-offset-2 active:outline-black lg:text-base">Buy Now</button>
                </div>
              </div>
            </>
          )}
        </div>
        <Footer></Footer>
      </>
    );
  }
}

export default DetailProductPage;
