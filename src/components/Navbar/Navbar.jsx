import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "../../helper/util"; 

import logo from "../../assets/logo.webp";

import { RxDividerVertical } from "react-icons/rx";
import { BsFillPersonFill, BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const {
    totalAmount,
    deliveryCharge,
  } = useSelector((state) => state.cart)

  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background-black text-white">
      <div className="w-full text-center sm:text-start">
        <div className="px-4 py-8 lg:px-8 lg:flex items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4 lg:mb-0">
            <img 
              className="object-cover w-16 rounded-full mr-2 cursor-pointer"
              src={logo} 
              alt="logo-pizzaria" 
              onClick={() => navigate("/")}
            />
            <div className="flex items-center justify-center gap-4">
              <div>
                <h6 className="text-sm">Pizzaria Regalo - Planalto</h6>
                <span className="text-xs lg:text-sm">
                  Conjunto Planalto Pingão, 3, Aurora - São Luís, MA, 65060-555
                </span>
              </div>
              <div className="flex items-center justify-center gap-4 text-6xl">
                <RxDividerVertical />
              </div>
              <div>
                <h6 className="text-sm">
                  Horario de Funcionamento
                </h6>
                <span className="text-xs lg:text-sm">
                  De Segunda a Domingos das 16:00 as 22:59
                </span>
              </div>
            </div>
          </div>
          <div 
            className="flex items-center justify-center gap-4 px-2"
          >  
            <button 
              className='flex items-center gap-1 shadow-md px-3 py-1 text-white font-bold text-sm uppercase cursor-pointer hover:bg-white hover:text-black'      
            >
              <span>
                Consultar Entrega em 
              </span>
              <span className="text-2xl">
                <MdKeyboardArrowDown />
              </span>
            </button>           
            <div className="flex items-center justify-center gap-4 text-3xl cursor-pointer">
              <BsFillPersonFill onClick={() => setOpen(true)} />
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

      {/* Login */}
      {open ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

      <div
        className={open ? 'absolute m-auto left-0 right-0 w-max rounded-md z-10 text-black' : 'hidden'}
      >              
        <div className="bg-white w-fit h-fit ml-auto mr-auto px-8 py-5 text-center rounded-md">
          <div>
            <h1 className="text-xl font-bold">Login</h1>
            <AiOutlineClose 
              onClick={() => setOpen(!open)}
              size={30}
              className='absolute right-4 top-4 bg-gray-500 rounded-full p-1 cursor-pointer hover:bg-red-700'
            />    
          </div>
          <div className="py-8 text-left">
            <label htmlFor="email" className="font-bold">Email</label>
            <input
              className="block outline-none w-full border-b-2 border-gray-500 p-2 mb-5" 
              type="email" 
              id="email"
              autoComplete="email"
              placeholder="Digite seu email" 
            />
            <label htmlFor="senha" className="font-bold">Senha</label>
            <input
              className="block outline-none w-full border-b-2 border-gray-500 p-2 mb-5"
              type="password" 
              id="senha"
              placeholder="Digite sua senha" 
            />
            <button 
              className='bg-gray-500 w-full px-3 py-2 text-white font-bold text-sm uppercase cursor-pointer rounded-md hover:bg-black hover:text-white'
            >
              Login
            </button>
          </div>
          <div>
            <p>Ou entre pelas suas redes sociais</p>
            <div className="flex items-center justify-center gap-4 mt-4 mb-4">
            <BsFacebook 
              size={30}
            />
            <BsLinkedin 
              size={30}
            />
            </div>
          </div>
          <div>
            <p>Ainda não tem uma conta?</p>
            <p className="underline">Registrar</p>
            <p className="underline">Esqueceu a senha?</p>
          </div>
        </div>
          
      </div>
    </nav>
  )
}

export default Navbar
