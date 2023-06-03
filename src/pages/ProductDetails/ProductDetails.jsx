import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addToCart } from "../../store/cartSlice";

import { pizzas } from "../../data/data";

import { AiOutlineShoppingCart } from "react-icons/ai";
 
const ProductDetails = () => {
  const [openTamanhoAndBorda, setOpenTamanhoAndBorda] = useState(true)
  const [openTamanhoAndBorda2, setOpenTamanhoAndBorda2] = useState(false)
  const [valueBorda, setValueBorda] = useState("Sem Borda")
  const [valueTamanho, setValueTamanho] = useState("P")

  const qty = 1

  const bordas = ['Borda com catupiry', 'Borda com cream cheese', 'Borda com cheddar', 'Borda com chocolate', 'Borda com mussarela']

  const [segundoSabor, setSegundoSabor] = useState([])
  const [query, setQuery] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { data: item } = useSelector((state) => state.modal)
  
  const openAndClose = () => {
    setOpenTamanhoAndBorda(false)
    setOpenTamanhoAndBorda2(true)
  }

  const pegarBorda = (e) => {
    setValueBorda(e.target.value)
  }

  const pegarTamanho = (e) => {
    setValueTamanho(e.target.value)
  }
 
  const goToTheCart = (item) => {
    if (segundoSabor.item !== undefined) {
      
      let tempItem = segundoSabor.item

      let price =
        valueTamanho === "P"
          ? tempItem.itemP.preco.toFixed(2)
          : valueTamanho === "G"
          ? tempItem.itemG.preco.toFixed(2)
          : tempItem.itemM.preco.toFixed(2)

      let idName =
        tempItem.name === "Baiana"
          ? 110 : tempItem.name === "Brigadeiro"
          ? 111 : tempItem.name === "Brócolis"
          ? 112 : tempItem.name === "Calabresa"
          ? 113 : tempItem.name === "Chocolate"
          ? 114 : tempItem.name === "Frango com Catupiry"
          ? 115 : tempItem.name === "Marguerita"
          ? 116 : tempItem.name === "Mussarela"
          ? 117 : tempItem.name === "Napolita"
          ? 118 : tempItem.name === "Romeu e Julieta"
          ? 119 : tempItem.name === "Toscana"
          ? 120 : ""      

      var tempSegundo = {
        nameS: tempItem.name,
        precoS: price,
        imagemS: tempItem.img,
        idS: idName
      }
    }

    let price =
      valueTamanho === "P"
        ? item.itemP.preco.toFixed(2)
        : valueTamanho === "G"
        ? item.itemG.preco.toFixed(2)
        : item.itemM.preco.toFixed(2)

    let totalPrice = qty * price

    let idP =
      valueTamanho === "P" ? item.itemP.id : valueTamanho === "G" ? item.itemG.id : item.itemM.id

    let idBorda =
      valueBorda === "Sem Borda"
        ? 71 : valueBorda === "Borda com catupiry"
        ? 72 : valueBorda === "Borda com cream cheese"
        ? 73 : valueBorda === "Borda com cheddar"
        ? 74 : valueBorda === "Borda com chocolate"
        ? 75 : valueBorda === "Borda com mussarela"
        ? 76 : ""

    let idFinal = tempSegundo ? idP + idBorda + tempSegundo.idS : idP + idBorda
    
    const tempItem = {
      ...item,
      id: idFinal,
      borda: valueBorda,
      tamanho: valueTamanho,
      preco: price,
      quantity: qty,
      totalPrice: tempSegundo ? (totalPrice + Number(tempSegundo.precoS)) / 2  : totalPrice,
      segundoSabor: tempSegundo ? tempSegundo : ""
    }

    dispatch(addToCart(tempItem))
    navigate("/cart")
    scrollTo(top)
  }

  return (   
    <section className="text-white">
      <div className="p-4 grid justify-center lg:grid-cols-[1fr_2fr] lg:gap-4">
        {/* details left */}
        <div className="flex items-center justify-center">
          <img src={item.img} alt="item" width="320px" />   
        </div>
        {/* details right */}
        <div className="relative mt-5 ml-2">
          {openTamanhoAndBorda && (
            <>
              <h2 className="text-3xl font-medium mb-1">
                {item.name}
              </h2>
              <p className="mb-1 w-10/12">
                {item.ingredientes}
              </p>
              <div className="mt-2 mb-10 flex flex-wrap gap-2">
                <form>
                  <h2 className="mr-4 text-xl">Escolha o tamanho desejado</h2>
                  <div className="flex flex-col gap-2 mt-2">                  
                    <div>
                      <input
                        id="P"
                        type="radio"
                        name="pizzas"
                        value={"P"}
                        onClick={pegarTamanho}
                        className="w-4 h-4 accent-transparent"
                        defaultChecked
                      />
                      <label 
                        htmlFor={"P"}                     
                        className="ml-2 text-xl"
                      >
                        {`${item.itemP.text + " - R$ " + item.itemP.preco.toFixed(2)}`}
                      </label>
                    </div>
                    <div>
                      <input
                        id="M"
                        type="radio"
                        name="pizzas"
                        value={"M"}
                        onClick={pegarTamanho}
                        className="w-4 h-4 accent-transparent"
                      />
                      <label 
                        htmlFor={"M"}                     
                        className="ml-2 text-xl"
                      >
                        {`${item.itemM.text + " - R$ " + item.itemM.preco.toFixed(2)}`}
                      </label>
                    </div>   
                    <div>
                      <input
                        id="G"
                        type="radio"
                        name="pizzas"
                        value={"G"}
                        onClick={pegarTamanho}
                        className="w-4 h-4 accent-transparent"
                      />
                      <label 
                        htmlFor={"G"}                     
                        className="ml-2 text-xl"
                      >
                        {`${item.itemG.text + " - R$ " + item.itemG.preco.toFixed(2)}`}
                      </label>
                    </div>                                                        
                  </div>          
                </form>
                {item.itemM.preco > 30 && (
                  <form className="mt-4 sm:mt-0">
                    <h2 className="mr-4 text-xl">Deseja adicionar alguma borda ?</h2>
                    <div className="flex flex-col gap-2 mt-2">
                      <div>
                        <input
                          id="Sem Borda"
                          type="radio"
                          name="bordas"
                          value={"Sem Borda"}
                          onClick={pegarBorda}
                          className="w-4 h-4 accent-transparent"
                          defaultChecked
                        />
                        <label 
                          htmlFor={"Sem Borda"}                     
                          className="ml-2 text-xl"
                        >
                          Sem Borda
                        </label>                      
                      </div> 
                      {bordas.map((item, idx) =>(
                        <div key={idx}>
                          <input
                            id={item}
                            type="radio"
                            name="bordas"
                            value={item}
                            onClick={pegarBorda}
                            className="w-4 h-4 accent-transparent"
                            
                          />
                          <label 
                            htmlFor={item}                    
                            className="ml-2 text-xl"
                          >
                            {item}
                          </label>    
                        </div>
                      ))}
                    </div>
                  </form>
                )}
              </div>
              <button 
                className="bg-white text-black rounded-md px-3 py-4 font-bold text-2xl uppercase mt-2 hover:bg-gray-500"
                onClick={() => navigate("/")}
              >
                Voltar
              </button>
              {item.itemM.preco > 30 
                ? (
                  <button 
                    className="bg-white text-black rounded-md px-3 py-4 font-bold text-2xl uppercase mt-2 ml-4 hover:bg-gray-500" 
                    onClick={openAndClose}
                  >
                    Avançar
                  </button>
                )
                : (
                  <button 
                    className="bg-white text-black rounded-md px-3 py-4 font-bold text-2xl uppercase mt-2 ml-4 hover:bg-gray-500" 
                    onClick={() => goToTheCart(item)}
                  >                  
                    Add Cart
                  </button> 
                )
              }
            </>
          )}
          {openTamanhoAndBorda2 && item.itemM.preco > 30 && (
            <div>
              <h2 className="text-xl">
                Deseja adicionar mais sabores na pizza ?
              </h2>
              <p>Escolha até 2 opções.</p>
              <p>
                Importante: A pizza de mais de 1 sabor será cobrada pela média dos preços dos
                sabores.
              </p>
              <input
                className="p-3 my-2 w-full border-[2px] border-white bg-transparent text-white font-semibold outline-none" 
                type="text" 
                name="search"
                placeholder="Pesquisar sabor" 
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
              />
              <div className="overflow-auto mb-4">               
                <div className="flex flex-wrap w-full h-[50vh] gap-2">
                  {pizzas.filter(item => 
                    item.name.toLowerCase().includes(query)
                  ).map((item, key) => (
                    <div 
                      className="grid grid-cols-[100px_auto] items-center p-4 w-full"
                      key={key}
                    >                       
                      <img 
                        src={item.img} 
                        alt={item.name}
                        className="w-[80px] m-auto"
                      />
                      <div>
                        <div>
                          <h6 className="text-xl">
                            {item.name}
                          </h6> 
                          <p className="text-sm">
                            {item.ingredientes}
                          </p>
                        </div>
                        <div>
                          <input type="radio" id={item.name} name="pizzas" value={item} onClick={() => setSegundoSabor({item})} />
                          <label htmlFor={item.name} style={{ marginLeft: "0.5rem" }}>
                            Adicionar
                          </label>                           
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                className="bg-white flex items-center justify-center gap-4 text-black rounded-md px-3 py-4 w-full font-bold text-2xl uppercase mt-2 ml-4 hover:bg-orange-600"
                onClick={() => goToTheCart(item)}
              >
                <span>
                  Finalizar Assim
                </span>
                <span>
                  <AiOutlineShoppingCart size={30} />
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section> 
  )
}

export default ProductDetails
