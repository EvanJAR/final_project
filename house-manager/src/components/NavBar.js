import {Link} from "react-router-dom";

function NavBar(){

  return(
    <>
      <h2>I am the NavBar</h2>
      <Link path="/home">Home</Link>
      <Link path="/basket">Basket</Link>
    </>
  )
}

export default NavBar;