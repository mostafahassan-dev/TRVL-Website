import  { useEffect, useState } from 'react'
import {RiMenu3Line , RiCloseLine} from "react-icons/ri"
import { FaTypo3} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "./navbar.css"
import Button from './Button'


function Navbar() {
    const [toggleMenu, settoggleMenu] = useState(false);
    const [button, setbutton] = useState(true);
    
    const closeMenu = ()=>{settoggleMenu(false)}
    const showButton = ()=>{

        if(window.innerWidth <= 960){
            setbutton(false)
        }else{
            setbutton(true)
        }
    }
    window.addEventListener('resize', showButton)
    useEffect(() => {
        showButton()
        
    }, []);

    return (
        <div className='trvl__navbar'>

            <div className="trvl__navbar-links">

                <div className="trvl__navbar-links_logo" onClick={closeMenu}>
                    <Link to = '/'>TRVL   </Link>
                    <FaTypo3 />
                </div>
                <div className="trvl__navbar-links_container" >
                    <Link to ="/" className='nav-item' >home</Link>
                    <Link to ="/about" className='nav-item' >About</Link>
                    <Link to ="/services" className='nav-item' >services</Link>
                </div>
            </div>
            
            <div className="trvl__navbar-menu">
                    {toggleMenu? <RiCloseLine onClick={()=>{settoggleMenu(false)}}/>
                    : <RiMenu3Line onClick={()=>{settoggleMenu(true)}}/>}
                {toggleMenu && (
                    <div  className="trvl__navbar-menu_container-links scale-up-ver-top" >
                        <Link to ="/" className='nav-item' onClick={closeMenu}>home</Link>
                        <Link to ="/about" className='nav-item' onClick={closeMenu}>About</Link>
                        <Link to ="/services" className='nav-item' onClick={closeMenu}>services</Link>
                        <Link to='/sign-up' className='nav-item-mobile' onClick={closeMenu}> Sign Up</Link>
                    </div>
                )}
            </div>
            {button && (<Button text= "Sign Up" buttonStyle='btn--outline'/>) }           

        
        </div>

            
    )
}

export default Navbar
