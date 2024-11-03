import React from "react";
import { useState , useEffect } from "react";
import "./styles.css"

export default function LoadMoreData (){

 
 const [loading, setloading] = useState(false)
 const [products, setProducts] = useState([])
 const [count, setCount] = useState(0)
 const [disabledButoon, setDisabledButoon] = useState(false)

async function fetcchImage(){
  try {
    setloading(true);
    const response = await fetch(
      `https://dummyjson.com/products?limit=20&skip=${
        count === 0 ? 0 : count * 20
      }`
    );
    const result = await response.json()
    if(result && result.products && result.products.length){
      setProducts((prevD)=>[...prevD, ...result.products])
      setloading(false)
    }

  }
  catch(e){
    console.log(e)
    setloading(false)
  }
}

  useEffect(() => {
    return () => {
      fetcchImage()
    };
  }, [count])
  useEffect(() => {
    return () => {
      if(products && products.length === 100) setDisabledButoon(true )
    };
  }, [products])
  console.log(products)

  if(loading){
    return <div>still loading data please wait </div>
  }


  return(
    <div className="load-more-container">
    <div className="product-container">
    {
      products && products.length ? 
      products.map(ProductsItem => 
      <div key={ProductsItem.id}>
      <img
      src={ProductsItem.thumbnail} 
      alt={ProductsItem.title}
      /> 
      <p>{ProductsItem.title}</p>
      </div>
      
      )
      :null}
    </div>
    <div className="button-container">
      <button disabled={disabledButoon} onClick={()=>setCount( count + 1)} >
        Load more Data
      </button>
      {
        disabledButoon ? <p>You have reached the max</p> : null  
      }
    </div>
    </div>
    
  )
}