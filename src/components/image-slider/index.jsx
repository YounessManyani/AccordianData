import React from "react";
import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './styles.css'



export default function ImageSlider({limit = 5, url ,page = 1 }){

  const [images, setImages] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [errorMsg, setErrorMsg] = useState(null)
  const [loading, setLoading] = useState(false)


 function handelPrevious() {
  setCurrentSlide(currentSlide === 0 ? images.length- 1 : currentSlide -1 )

 }
 function handelNext(){
  setCurrentSlide(currentSlide === images.length -1 ? 0 : currentSlide + 1 )
 }



  async function fetchImages(getUrl){
    try{
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}?limit=${limit}`);
      const data = await response.json();
    if(data){
      setImages(data)
      setLoading(false)
    }
    }
    catch(e){
      setErrorMsg(e.message);
      setLoading(false);
    }

  }
  

  useEffect(() => {
    return () => {
      if(url !== " ") fetchImages(url)
    };
  }, [url])
  console.log(images)

  if(loading){
    <div>Loading data Please Wait</div>
  }
  if (errorMsg !== null){
    <div>error occured ! {errorMsg}</div>
  }
 

  
return(
  <div className="container">
  <BsArrowLeftCircleFill
  onClick={handelPrevious}
    className="arrow arrow-left"
  />
  { images && images.length ? 
  images.map((imageItem,index)=>(
    <img
    key={imageItem.id}
    src={imageItem.download_url} 
    alt={imageItem.download_url} 
    className={
      currentSlide === index
        ? "current-image"
        : "current-image hide-current-image"
    }
    />
  ))
  : null}
  <BsArrowRightCircleFill
  onClick={handelNext}
  />
  <span>
    {
      images && images.length ? 
      images.map((_,index) => 
      <button
      key={index}
      className={
        currentSlide === index
          ? "current-indicator"
          : "current-indicator inactive-indicator"
      }
      onClick={() => setCurrentSlide(index)}
      ></button>)
      : null
    }
  </span>
  
  
  </div>
)

}
  