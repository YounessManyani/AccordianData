import MenuItem from "./menu-item";


export default function MenuList({List =[]}){
    return(
        <ul className="menu-list-container">
            {
                List && List.length > 0 ?
               List.map((ListItem) => 
               <MenuItem
               item={ListItem}
               />)
                :null 
            }
        </ul>
    )
}