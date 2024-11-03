import { useEffect , useState } from "react";
import Suggetion from "./suggestion";




export default function SearchAutocomplete (){
    const [lodaing, setLodaing] = useState(false)
    const [error, seterror] = useState(null)
    const [users, setUser] = useState([])
    const [searchParam, setSearchParam] = useState('')
    const [showParam, setShowParam] = useState(false) 
    const [showDropDown, setShowDropDown] = useState(false)
    const [filterUsers, setFilterUsers] = useState([])



function HandelClick(event){
    // console.log(event.target.innerText)
    setShowDropDown(false)
    searchParam(event.target.innerText)
    setFilterUsers([])
}

function handlehange(event){
    const querry = event.target.value.toLowerCase()
    setSearchParam(querry)
    if(querry.length  > 1){
        const filterData = 
        users && users.length ? users.filter((item)=> item.toLowerCase().indexOf(querry) > - 1 ) : [];
        setFilterUsers(filterData);
        setShowDropDown(true);
        
    }else{
        setShowDropDown(false)
    }
}

async  function fetchListOfUsers(){
    setLodaing(true)
    try{
    const response  = await fetch("https://dummyjson.com/users");
    const data =  response.json();
    
    console.log(data)
    if(data && data.users && data.users.length){
        setUser(data.user.map(userItem => userItem.firstName))
    }

}
    catch(error){
        setLodaing(false)
        seterror(error)
        console.log(error)
    }
}

console.log(users , filterUsers)

    useEffect(() => {
      return () => {
        fetchListOfUsers()
      };
    }, [])


    return (
        <div>
            {
                lodaing ? <h1>Still Loading please wait</h1> : 
                <input type="searsh-users" placeholder="searsh users here ... "
                onChange={handlehange}
            />
            }
            
            {
                showDropDown && <Suggetion handlClick={HandelClick} data={filterUsers} />
            }
        </div>
    )

}