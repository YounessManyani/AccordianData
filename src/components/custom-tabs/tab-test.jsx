import Tabs from "./tabs";
import './tabs.css'


export default function tabTest (){

  const tabs=[
    {
      label : "tab 1",
      content :  <div> content tab 1 </div>
    },
    {
      label : "tab 2",
      content :  <div> content tab 2 </div>
    },
    {
      label : "tab 3",
      content :  <div> content tab 3 </div>
    },
  ]

  function handleChange (curentTabIndex){
    console.log(curentTabIndex)
  }

  return(
    <Tabs
    TabsContent={tabs}
    Onchage={handleChange}
    />
  )
}