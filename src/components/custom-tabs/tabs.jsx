import { useState } from "react"



export default function Tabs ({TabsContent,Onchage}){

  const [curentTabIndex, setCurentTabIndex] = useState(0)

  function handleOnclick (curentTabIndex){
    setCurentTabIndex(curentTabIndex)
    Onchage(curentTabIndex)
  }
  return(
    <div className="wraper">
      <div className="heading">
        {TabsContent.map((tabItem, index) => (
          <div 
          className={`tab-item ${curentTabIndex === index ? "active" : ''}`}
          onClick={()=>handleOnclick(index)}
          key={tabItem.label}>
             <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content" style={{ color: "red" }}>{TabsContent[curentTabIndex] && TabsContent[curentTabIndex].content}</div>
    </div>
  )



}