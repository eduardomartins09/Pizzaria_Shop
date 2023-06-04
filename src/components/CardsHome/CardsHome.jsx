import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setModalData } from "../../store/modalSlice";
import { goToTheTop } from "../../helper/util";

const CardsHome = ({ item }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const goToProductDetails = (data) => {
    dispatch(setModalData(data))
    navigate("/productDetails")
    goToTheTop()
  }

  const text = "*Refrigerante não incluso"

  return (
    <>
      <div className="grid grid-cols-1 items-end justify-between p-4 text-white shadow-2xl" key={item.id}>
        <div className="flex items-center h-[180px]">
          <img
            src={item.img}
            alt={item.name}
            className="w-[180px] m-auto"
          />
        </div>
        <div>
          <div>
            <h6 className="text-2xl mb-1 font-semibold">
              {item.name}
            </h6>
            <p className="mb-0.5">
              {item.ingredientes}
            </p>
            <h6 className="text-xl mb-1 font-medium">
              {item.name !== "Refrigerante" && item.name !== "Suco" && item.name !== "Agua" && item.name !== "Cerveja Lata" && (
                text
              )}
            </h6>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <p>
                {item.itemP && item.itemP.text}
              </p>
              <p>
                {item.itemP && "R$" + item.itemP.preco.toFixed(2)}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p>
                {item.itemM && item.itemM.text}
              </p>
              <p>
                {item.itemM && "R$" + item.itemM.preco.toFixed(2)}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p>
                {item.itemG && item.itemG.text}
              </p>
              <p>
                {item.itemG && "R$" + item.itemG.preco.toFixed(2)}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <button 
              className="p-2 font-semibold rounded-md cursor-pointer bg-orange-500 w-full hover:bg-white hover:text-black"
              onClick={() => goToProductDetails(item)}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardsHome
