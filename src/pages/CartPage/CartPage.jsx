import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { clearCart, getCartTotal, removeFromCart, toggleCartQty } from "../../store/cartSlice";

import { AiOutlineHome, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import { formatPrice } from "../../helper/util";

const CartPage = () => {
  const {
    data: cartProducts,
    totalItems,
    totalAmount,
    deliveryCharge,
  } = useSelector((state) => state.cart)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartTotal())
  
  }, [useSelector((state) => state.cart)])

  //onClick={() => navigate("/")}

  return (
    <section>
      <div className="flex items-end bg-background-white text-color-gray gap-2 px-8 py-2">
        <span className="">
          <AiOutlineHome 
            size={40}
            className="cursor-pointer" 
            onClick={() => navigate("/")} 
          />              
        </span>
        <span className="font-bold text-2xl">
          -
        </span>
        <span className="font-bold text-2xl">
          Home
        </span>   
      </div>    
      <div className="p-4 bg-background-cart">
        <div className="mr-8 w-full md:flex md:justify-between">
          <div className="rounded-2xl p-5 w-full md:w-1/2">
            <h2 className="text-2xl uppercase font-bold">
              Carrinho
            </h2>
            {cartProducts.map((item) => (
              <div className="mt-5 px-2 py-4 text-center sm:flex sm:text-start bg-background-white" key={item.id}>
                <div className="flex justify-center items-center sm:block">
                  <div>
                    <img  
                      src={item.img} 
                      alt={item.name} 
                      className="w-[100px] sm:w-[120px]"
                    />
                  </div> 
                  {item.segundoSabor.imagemS && item.segundoSabor.imagemS !== item.img  && (
                    <div>
                      <img 
                        src={item.segundoSabor.imagemS} 
                        alt={item.name} 
                        className="w-[100px] sm:w-[120px]"
                      />
                    </div>
                  )}
                </div>
                <div className="sm:ml-4">
                  <h1 className="text-xl sm:text-2xl font-bold">                   
                  {item.segundoSabor.nameS === item.name 
                    ? item.name : item.segundoSabor.nameS
                    ? "Metade " + item.name + ", Metade " + item.segundoSabor.nameS : item.name
                  }                                      
                  </h1>
                  <h6 className="text-sm font-bold">
                    Tamanho: ({item.tamanho})
                  </h6>
                  {item.preco > 30 && (
                    <h6 className="text-sm font-bold">
                      Borda: {item.borda}
                    </h6>
                  )}
                  <div className="mt-1 mb-1 flex justify-center gap-2 sm:justify-start">
                    <h6 className="text-sm font-bold">
                      Qtd
                    </h6>
                    <button 
                      onClick={() => dispatch(toggleCartQty({ id: item.id, type: "DEC" }))}
                    >
                      <AiOutlineMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => dispatch(toggleCartQty({ id: item.id, type: "INC" }))}
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                  <h6 className="text-sm font-bold">    
                    {item.segundoSabor.precoS === item.preco 
                    ? "Preço " + item.name + ": " + formatPrice(item.preco) : item.segundoSabor.precoS
                    ? <><p>Preço: {item.segundoSabor.nameS}: {formatPrice(item.segundoSabor.precoS)}</p> <p>Preço: {item.name}: {formatPrice(item.preco)}</p></> : "Preço " + item.name + ": " + formatPrice(item.preco) }                 
                  </h6>                                                
                  <h4 className="text-xl font-bold mt-4">
                    SubTotal: {formatPrice(item.totalPrice)}
                  </h4>                  
                  <button className="flex items-center gap-1 rounded-md px-2 py-2 font-bold text-sm uppercase mt-4 bg-red-600 hover:bg-background-black hover:text-white" 
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    <span>
                      <BsTrash  size={20} />
                    </span>
                    <span>
                      Remover
                    </span>
                  </button>              
                </div>
              </div>
            ))}
            <div>
              <button className="rounded-md px-2 py-2 font-bold text-sm uppercase mt-4 bg-red-600 hover:bg-background-black hover:text-white" 
                onClick={() => dispatch(clearCart())}
              >
                Limpar Carrinho
              </button>
            </div>
          </div>
          <div className="bg-background-white h-fit p-6 mt-8 rounded-xl">
            <h2 className="text-2xl font-bold">
              Resumo do Pedido
            </h2> 
            <div className="w-full h-[2px] my-2 bg-black"></div>         
            <div>
              <h2 className="font-bold text-sm">
              {totalItems} Items Adicionados. Preço <span>{formatPrice(totalAmount)}</span>
              </h2>
            </div>
            <div>
              <h2 className="font-bold text-sm">
                Taxa de Entrega <span>{formatPrice(deliveryCharge)}</span>
              </h2>
            </div>
            <div className="w-full h-[3px] my-2 bg-black"></div>
            <div>
              <h2 className="text-xl font-bold">
                Total: {formatPrice(totalAmount + deliveryCharge)}
              </h2>
              <button className="bg-orange-600 w-full rounded-sm px-2 py-2 font-bold text-sm uppercase mt-2 hover:bg-gray-500">
                Ir para forma de pagamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartPage
