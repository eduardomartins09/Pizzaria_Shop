import { useDispatch } from "react-redux";
import { setFilterData } from "../../store/filterSlice";

import { AiOutlineSearch } from "react-icons/ai";
import { FaMotorcycle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const SearchItem = () => {
  const dispatch = useDispatch()

  return ( 
    <section className="text-white">
      <div className="sm:flex items-center justify-between gap-2 px-8 py-6">
        <div className='border-2 rounded-md flex items-center px-2 py-1 sm:w-[400px] lg:w-[500px] mb-2 sm:mb-0'>
          <AiOutlineSearch size={25} />
          <input
            className='bg-transparent p-2 w-full focus:outline-none'
            type='text'
            name="search"
            placeholder="Buscar no cardáprio"
            onChange={(e) => dispatch(setFilterData(e.target.value.toLowerCase()))}
          />
        </div>
        <button 
          className='sm:flex items-center gap-2 shadow-md px-3 py-4 rounded-lg text-white font-bold text-sm uppercase cursor-pointer hover:bg-white hover:text-black hidden'      
        >
          <span className="text-xl">
            <FaMotorcycle />
          </span>
          <span >
            Entrega De 35 a 40m
          </span>
          <span className="text-xl">
            <MdKeyboardArrowDown />
          </span>
        </button>
      </div>
      <div className="flex items-center gap-2 px-8 py-6">
        <a 
          className="bg-gray-500 shadow-md px-3 py-3 rounded-lg text-white font-bold text-sm uppercase cursor-pointer hover:bg-white hover:text-black"
          href="#pizzas"
        >
          Pizzas
        </a>
        <a 
          className="bg-gray-500 shadow-md px-3 py-3 rounded-lg text-white font-bold text-sm uppercase cursor-pointer hover:bg-white hover:text-black"
          href="#aperitivos"
        >
          Aperitivos
        </a>
        <a 
          className="bg-gray-500 shadow-md px-3 py-3 rounded-lg text-white font-bold text-sm uppercase cursor-pointer hover:bg-white hover:text-black"
          href="#bebidas"
        >
          Bebidas
        </a>
      </div>
    </section>  
  )
}

export default SearchItem