import { useState, useEffect } from "react";


export default function RandomColor (){
  
  const [typeOfColor, setTypeOfColor] = useState("hex")
  const[color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
function HandleHexColor() {
  // #678765
  const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[randomColorUtility(hex.length)];
  }
  setColor(hexColor);
}

function HandelRgbColor(){
  
  const r = randomColorUtility(256);
  const g = randomColorUtility(256);
  const b = randomColorUtility(256); 

  setColor(`rgb(${r},${g},${b})`)
}

useEffect(() => {
  return () => {
    if(typeOfColor === 'rgb') HandelRgbColor();
    else HandleHexColor();
  };
}, [typeOfColor])
  return(
  <div
  style={{
    width: "100vw",
    height: "100vh",
    background: color,
  }}
>
      
      <button onClick={()=>setTypeOfColor("hex")}>Hex Color</button>
      <button onClick={()=>setTypeOfColor("rgb")}>RGb color</button>
      <button onClick={typeOfColor ==='hex' ? HandleHexColor : HandelRgbColor}>Generate random color</button>
      <div
      style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"#fff",
        fontSize:"60px",
        marginTop:"50px",
        flexDirection:"column",
        gap:"20px",
      }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB color" : "HEX color"}</h3>
        <h1>{color}</h1>

      </div>
  </div>
)


}