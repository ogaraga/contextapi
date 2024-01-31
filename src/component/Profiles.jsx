import { useContext} from "react";
import UserContext from "../context/UserContext";
import Login from "./Login";
import Modal from './modal';
function Profiles() {
  

  const { user, modal, setModal} = useContext(UserContext);
  const handleLogOut =()=>{
      
    return(
    <div style={{zIndex: 3}}>
      {setModal(<Modal/>)} 
    </div>)
  }
  return (
    <div  style={{border: '3px solid aqua', borderWidth:'5px', backgroundColor: "grey", padding: '10px', color: "white"}}>
      {modal}
      <span style={{margin: 'auto', textAlign:"start"}}>
       <h4 style={{color:"aqua"}}>Welcome to {`${user.userName.slice(0, 3)}'s`} Profile:</h4>   <p>Name: {user.userName} </p>
        <p>Email: {user.email} </p>
        <p>ID:   {user.userId} </p>
      </span>
      {user? <button style={{border:'1px solid black', cursor: "pointer", backgroundColor: "aqua", color: "black", padding: '5px'}} onClick={handleLogOut}>LogOut</button>: <Login/>}
    </div>
  );
}
export default Profiles;
