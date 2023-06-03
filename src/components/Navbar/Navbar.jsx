import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatPrice } from "../../helper/util"; 

import logo from "../../assets/logo.webp";

import { RxDividerVertical } from "react-icons/rx";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const {
    totalAmount,
    deliveryCharge,
  } = useSelector((state) => state.cart)

  const navigate = useNavigate()
 
  return (
    <nav className="sticky top-0 z-50 bg-background-black text-white">
      <div className="w-full text-center sm:text-start">
        <div className="px-4 py-6 sm:px-8 sm:flex items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4 sm:mb-0">
            <div className="flex items-center sm:gap-2">
              <img 
                className="object-cover w-16 rounded-full mr-2 cursor-pointer"
                src={logo} 
                alt="logo-pizzaria" 
                onClick={() => navigate("/")}
              />
              <div className="block">
                <RxDividerVertical size={50} />
              </div>
              <h6 className={"text-sm sm:text-xl"}>Pizzaria Regalo - Planalto</h6>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 px-2">            
            <div className="flex items-center justify-center gap-4 text-3xl cursor-pointer">
              <BsFillPersonFill />
            </div>
            <button
              className="flex items-center gap-2 px-4 py-1 rounded-lg shadow-md uppercase hover:bg-white hover:text-black"
              onClick={() => navigate("/cart")}
            >        
              <span className="text-xl">
                <AiOutlineShoppingCart />              
              </span>  
              <span className="font-bold text-sm">
                {totalAmount + deliveryCharge <= 10 
                  ? "R$ 00,00"
                  : formatPrice(totalAmount + deliveryCharge)
                }
              </span>         
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
