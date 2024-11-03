import MenuList from "./menu-list";
import { useState } from "react";




export default function MenuItem({item}){
    const [displayCurentChildren, setDisplayCurentChildren] = useState({})
    

    function HandltoggleChildren(GetcCurentLabel){
        setDisplayCurentChildren({
            ...displayCurentChildren,[GetcCurentLabel] : !displayCurentChildren[GetcCurentLabel],
         }
        )
    }
    return(
        <li>
            <div className="menu-item">
            <p>{item.label}</p>
            {
                item && item.children && item.children.length ? <span onClick={()=> HandltoggleChildren(item.label )}>
                    
                    {
                        displayCurentChildren[item.label] ? '-' : '+' 
                    }</span> : null
            }
            </div>
            {
                item && item.children && item.children.length > 0 && displayCurentChildren[item.label] ?
                <MenuList List={item.children}/>
                :null
            }
        </li>
    )

}