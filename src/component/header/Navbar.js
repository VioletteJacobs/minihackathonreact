// import React from 'react'
// import react, {useState, useEffect} from "react"
// // import fontawesome
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faSortDown} from "@fortawesome/free-solid-svg-icons"
// import {Link} from "react-router-dom"
// import "./Navbar.css"

// function Navbar() {
//     const [toggleMenu, setToggleMenu] = useState(false);
//     const [largeur,setLargeur] = useState(window.innerWidth)

//     const toggleMenuSmallScreen = ()=> {
//         setToggleMenu (!toggleMenu)
//     }

//     useEffect(()=>{
// const changeWidth = () =>{
//     setLargeur(window.innerWidth)

//     if (window.innerWidth > 500){
//         setToggleMenu(false);
//     }

// }
//         window.addEventListener("resize", changeWidth);
//         return() =>{
//             window.removeEventListener("resize", changeWidth);
//         }
//     },[])
//     return (
        
//         <nav>
//             {toggleMenu || largeur > 500 && (
//                 <ul className="list p-0 m-0">
//                     <Link to="/">
//                         <li className="items">Présentation</li>
//                     </Link>
//                     <Link to ="/Promesse">
//                         <li className="items">Notre offre</li>
//                     </Link>
//                     <Link to="/Temoignage">
//                         <li className="items">Témoignages</li>
//                     </Link>
//                     <Link to="/Contacts">
//                         <li className="items">Contacts</li>
//                     </Link>
//                 </ul>
//             )}
//             <button onClick={toggleMenuSmallScreen} className="buttonNav"><FontAwesomeIcon icon={faSortDown} /></button>
            
//         </nav>
//     )
// }

// export default Navbar
