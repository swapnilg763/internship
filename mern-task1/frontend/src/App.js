import {useEffect,useState} from "react";
import axios from "axios";

function App(){

const [users,setUsers]=useState([]);

useEffect(()=>{

axios.get("http://localhost:5000/api/users")

.then(response=>{

setUsers(response.data);

})

.catch(error=>{

console.log(error);

});

},[]);

return(

<div>

<h1>User List</h1>

{users.map((user,index)=>(

<p key={index}>
{user.name}
</p>

))}

</div>

);

}

export default App;