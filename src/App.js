// import bootstrap/jquery
import "bootstrap/dist/css/bootstrap.min.css"
import "jquery/dist/jquery"
import "bootstrap/dist/js/bootstrap.bundle.min"

// import components
import Header from "./component/header/Header"
import Footer from "./component/footer/Footer"
// import  react. 
import react, {Fragment, useRef} from "react"
import './App.css';

// cursor 
function App() {
  let cursorRef = useRef();
  const mousePosition = e =>{
    cursorRef.current.setAttribute("style", `top: ${e.pageY -20}px; left: ${e.pageX -20}px;`)
  }
  return (
    <Fragment>
      <div onMouseMove ={mousePosition} className ="App">
        <div ref={cursorRef} className="cursorPerso"></div>
        <Header />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
