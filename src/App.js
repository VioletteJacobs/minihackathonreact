// import bootstrap/jquery
import "bootstrap/dist/css/bootstrap.min.css"
import "jquery/dist/jquery"
import "bootstrap/dist/js/bootstrap.bundle.min"

// import components
import Header from "./component/header/Header"
import Footer from "./component/footer/Footer"

import react,{Fragment} from "react"
import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <Footer />
    </Fragment>
  );
}

export default App;
