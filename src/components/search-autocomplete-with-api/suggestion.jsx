



export default function Suggetion ({data , HandelClick}){

return(
    <div>
        { data && data.length ? 
        data.map((Item, Index)=>
        <li onClick={HandelClick} key={Index}>{Item}</li>
        )
        
        
        
        :  null       
      }
    </div>
)
}