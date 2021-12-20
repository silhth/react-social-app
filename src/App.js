import {
  Routes,
  Route,
} from "react-router-dom";
import { useReducer } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { CreatePost } from "./components/CreatePost";

const INIT_STATE = {
  name: "Feisbrut",
  nav: [
    { link: "/", label: "Home" },
    { link: "/messages", label: "Messages" },
    { link: "/friends", label: "Friends" },
    { link: "/new-post", label: "Creae new post" },

  ],
  friendsPreview: []
  
}

const reducer = (state, action) => {
  switch(action.type) {
    case "change-name":
      return {...state, name:"faisbel"};
    default: 
      return state;
  };
}

function App() {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
 


  return (
    <div>
      <Header name={state.name} links={state.nav} /> 
      <button onClick={() => dispatch({type: 'change-name'})}>Cambia Nome</button>
        <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route path="/messages" element= {<h3>Messaggi</h3>}/>
          <Route path="/friends" element= {<h3>Friends</h3>}/>
          <Route path="/new-post" element= {<CreatePost/>}/>

        </Routes>    
      {/* <AddVAT price={100} vat={0.22} /> */}
      <Footer />
    </div>
  );
}

export default App;