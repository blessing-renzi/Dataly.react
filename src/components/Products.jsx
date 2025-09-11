import React from 'react'
import Button from './button'
import { cardContent } from './data'

const Products = () => {
  return (
    <div className='w-full py-[10rem] px-2 bg-white'>
      <div className='layout grid md:grid-cols-3 gap-8'>
        {
          cardContent.map((card) =>{
            return (
              <div
                key={card.id}
                className={`${card.cardBg} shadow-xl w-full p-4 my-4 rounded-lg hover:scale-105 duration-300`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-20 mx-auto mt-[-3rem]"
                />
                <h1 className="text-center font-bold text-2xl py-3">
                  {card.title}{" "}
                </h1>
                <h2 className="text-center font-bold text-4xl py-3">
                  {card.price}{" "} 
                </h2>
                <p className="text-center font-semibold">500 GB Storage </p>
                <hr className="text-gray-300" />
                <p className="text-center font-semibold p-3">
                  2 granted user
                </p>
                <hr className="text-gray-300" />
                <p className="text-center font-semibold p-3">Send up to 4GB</p>
                <hr className="text-gray-300" />
                <Button
                  content={"Start Trial"}
                  type={"button"}
                  className={
                    "bg-green-400 block mx-auto my-6 hover:bg-green-600 hover:text-white text-black text-center"
                  }
                />
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default Products