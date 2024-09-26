import React from 'react'
import ProductCard from './ProductCard'


const productsData=[
    {
       img:"/jacket.jpg",
       title:"Jacket",
       description:"MEN Yarn Fleece  Full-Zip Jacket",
       rating:4,
       price:"45.00",
    },
    {
        img:"/skirt.jpg",
       title:"Skirt",
       description:"BLock Floral Wrap Midi Skirt",
       rating:5,
       price:"55.00",
    },
    {
        img:"/party wear.jpg",
       title:"Party Wear",
       description:"Women's Party wear shoes",
       rating:3,
       price:"25.00",
    },
    {
        img:"/shirt.jpg",
       title:"Shirt",
       description:"Pure garments Dyed Cotton Shirt",
       rating:4,
       price:"45.00",
    },
    {
        img:"/sports.jpg",
       title:"Sports",
       description:"Trekking & Running Shoes - Black",
       rating:3,
       price:"58.00",
    },
    {
        img:"/smart watch.jpg",
       title:"Watches",
       description:"Smart Watches Vital Plus ",
       rating:4,
       price:"100.00",
    },
    {
        img:"/pouch.jpg",
       title:"Watches",
       description:"Pocket Watch Leather Pouch",
       rating:4,
       price:"120.00",
    }
]

const NewProducts = () => {
  return (
    <div>
      <div><h2 className='font-medium text-2xl pb-4'>New Products</h2>
      <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
             {productsData.map((item,index)=>(
              <ProductCard key={index}
              img={item.img}
              title={item.title}
              desc={item.description}
              rating={item.rating}
              price={item.price}
              />)
             )}
      </div>
      </div>
    </div>
  )
}

export default NewProducts;
