import React, {useState, useEffect} from 'react'
import { NavLink } from "react-router-dom";

function Nav() {
    const [showmobile, setmobile] = useState(false)
    const [showmobilemenu, setmobilemenu] = useState(false)

useEffect(() => {
    const handleResize = () => {
        if(window.innerWidth < 480){
            console.log(`mobile:- ${window.innerWidth}`)
            setmobile(true)
        }
        else{
            setmobile(false)
        }
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);

}, [])

const mobileClick = () =>{
    setmobilemenu(!showmobilemenu)
}
const menuHandle = () =>{
    setmobilemenu(false)
}




    return (
        <>
        <div className={showmobilemenu ? "navigation navigation-mobile" :'navigation' }  onClick={menuHandle}>
        <NavLink  exact to="/">Home</NavLink>
        <NavLink  exact to="/about">About</NavLink>
        <NavLink  exact to="/country">Country</NavLink>
        </div>
    {showmobile ? <div className="mobile-menu" onClick={mobileClick}>Menu</div> : null}
        </>
    )
}

export default React.memo(Nav)
