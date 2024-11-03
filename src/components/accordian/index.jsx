import React , {useState} from 'react'
import data from "./data"
import "./index.css"


export default function Accordian() {
  
  const [selected, setSelected] = useState('')
  const [enableMultiSelection, setEnableMultiSelection] = useState(false)
  const [multiSelection, setMultiSelection] = useState([])

  function handelClick (id) {
    setSelected(id === selected ? null : id)
  }
  function handelMultiSelection(id){
    let copyMulti = [...multiSelection];
    const finIndexOf = copyMulti.indexOf(id);
    if(finIndexOf === -1) copyMulti.push(id)
    else copyMulti.splice(finIndexOf , 1)
    setMultiSelection(copyMulti)
  }
  
  return (
      <div className='wraper'>
        <button className='button' onClick={()=> setEnableMultiSelection(!enableMultiSelection)}>EnableMultiSelction</button>
        <div className='accordian'>
        {data && data.length > 0 ? (data.map((dataItem)=>(
          <div className='item'>
            <div className='title'onClick={enableMultiSelection ? ()=> handelMultiSelection(dataItem.id) :()=> handelClick(dataItem.id)} >
            <h3 >{dataItem.question}</h3>
            <p>+</p>
            </div>
            {
              enableMultiSelection ? multiSelection.indexOf(dataItem.id) !== -1 && 
              <div className='content'> {dataItem.answer} </div>
              :selected === dataItem.id && 
              <div className='content'> {dataItem.answer} </div>
            }
            {/* { 
            selected === dataItem.id ? 
            <div className='content'> {dataItem.answer} </div>
            : null} */}
          </div>
        )))
         :null }
      </div>
    </div>
  )
}
