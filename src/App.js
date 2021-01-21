// import bootstrap/jquery
import "bootstrap/dist/css/bootstrap.min.css"
import "jquery/dist/jquery"
import "bootstrap/dist/js/bootstrap.bundle.min"
// import fontawesome
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import components
import Presentation from "./component/Presentation/Presentation";
import Promesse from "./component/promesse/Promesse"

import react,  {Component, Fragment} from "react"
import './App.css';

function App() {
  return (
    <Fragment>
      <Presentation />
      <Promesse />
    </Fragment>
  );
}

export default App;
