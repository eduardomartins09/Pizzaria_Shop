import { BsFacebook, BsInstagram, BsTwitter, BsPinterest } from "react-icons/bs";
import { MdRoom } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
  
import logo  from "../../assets/logo.webp";
  
const Footer = () => {
    return (
      <footer className="text-white sm:flex">
        <div className="grow flex flex-col items-center justify-start text-center py-4 px-4">
          <img 
            src={logo} 
            alt="logo-pizzaria-footer" 
            className="w-[60px] rounded-full"
          />
          <p className="mt-4 mb-4">Regalo Empreendimentos Ltda</p>
          <p>27.227.197/0001-52</p>
        </div>
        <div className="grow-[2] p-6 flex justify-center">
          <div className="ml-8">
            <h4 className="mb-3">Termos e Política</h4>
            <ul>
              <li className="mb-0.5 w-full cursor-pointer">Termos de Uso</li>
              <li className="mb-0.5 w-full cursor-pointer">Política de Cancelamento</li>
              <li className="mb-0.5 w-full cursor-pointer">Política de Arrependimento</li>
              <li className="mb-0.5 w-full cursor-pointer">Política de Privacidade</li>
            </ul>
          </div>
          <div className="ml-8">
            <h4 className="mb-3">Navegação</h4>
            <ul>
            <li className="mb-0.5 w-full cursor-pointer">Sobre</li>
              <li className="mb-0.5 w-full cursor-pointer">Nossas Lojas</li>
              <li className="mb-0.5 w-full cursor-pointer">Dúvidas Frequentes</li>         
            </ul>         
          </div>
        </div>
        <div className="grow-[2] p-6 flex flex-col flex-wrap items-center sm:block">
          <h4 className="mb-5">Contact</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center mr-2 text-2xl bg-background-facebook">
              <BsFacebook />
            </div>
            <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center mr-2 text-2xl bg-background-instagram">
              <BsInstagram />
            </div>
            <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center mr-2 text-2xl bg-background-twitter">
              <BsTwitter />
            </div>
            <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center mr-2 text-2xl bg-background-pinterest">
              <BsPinterest />
            </div>
          </div>
          <div className="flex mb-4">
            <MdRoom className="text-3xl mr-2" /> 
            Conjunto Planalto Pingão, 3, Aurora - São Luís, MA, 65060-555
          </div>
          <div className="flex mb-4">
            <AiFillPhone className="text-2xl mr-2"  /> 
            (98) 5555-5555
          </div>
          <img 
            src="https://i.ibb.co/Qfvn4z6/payment.png" 
            alt="payment-options-img" 
            className="w-[80%]"
          />
        </div>
      </footer>
    )
}
  
export default Footer
  