import {Link} from "react-router-dom";

function NavBar(){

  return(
    <>
      <h2>I am the NavBar</h2>
      <Link to="/">Welcome Page</Link>
      <Link to="/house">Home</Link>
      <div>
        <p>List of basket items here</p>
        <p>Button to checkout here</p>
      </div>
    </>
  )
}

export default NavBar;