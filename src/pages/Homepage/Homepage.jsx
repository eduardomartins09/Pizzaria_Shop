import { useSelector } from "react-redux";

import { pizzas, aperitivo, bebidas } from "../../data/data";

import CardsHome from "../../components/CardsHome/CardsHome";
import SearchItem from "../../components/Search/Search";

const Homepage = () => {
  const { data: query } = useSelector((state) => state.filter)

  return (
    <section>
      <SearchItem />
      <hr />  
      <div className="px-8">
        <div className="block pb-8">
          <h4 className="text-white text-4xl py-6" id="pizzas">
            #Pizzas
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {pizzas.filter(item => 
              item.name.toLowerCase().includes(query)
            ).map((pizza, key) => (
              <CardsHome item={pizza} key={key} />
            ))}    
          </div>
        </div>   
        <div className="block pb-8">
          <h4 className="text-white text-4xl py-6" id="aperitivos">
            #Aperitivos
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {aperitivo.filter(item => 
              item.name.toLowerCase().includes(query)
            ).map((aperitiv, key) => (
              <CardsHome item={aperitiv} key={key} />
            ))}         
          </div>
        </div>   
        <div className="block pb-8">
          <h4 className="text-white text-4xl py-6" id="bebidas">
          #Bebidas
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {bebidas.filter(item => 
              item.name.toLowerCase().includes(query)
            ).map((bebida, key) => (
              <CardsHome item={bebida} key={key} />
            ))} 
          </div>
        </div>
      </div>  
    </section>
  )
}

export default Homepage
