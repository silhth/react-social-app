import { useReducer, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
// import NewPost from "./pages/NewPost";
// import Messages from "./pages/Messages";
// import Friends from "./pages/Friends";
// import Login from "./pages/Login";


// import Home from "./pages/Home";

const Home = lazy(() => import("./pages/Home"));
const NewPost = lazy(() => import("./pages/NewPost"));
const Messages = lazy(() => import("./pages/Messages"));
const Friends = lazy(() => import("./pages/Friends"));
const Login = lazy(() => import("./pages/Login"));


const INIT_STATE = {
  name: "FeisBell",
  nav: [
    { link: "/", label: "Home" },
    { link: "/messages", label: "Messages" },
    { link: "/friends", label: "Friends" },
    { link: "/login", label: "Login" },
  ],
  friendsPreview: [],
  fontFamily: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "change-name":
      return { ...state, name: "FeisBrutt" };
    case "change-font":
      return { ...state, fontFamily: "Arial" };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  return (
    <div>
      <Header name={state.name} font={state.fontFamily} links={state.nav} />

      <button
        onClick={() => {
          dispatch({ type: "change-name" });
          dispatch({ type: "change-font" });
        }}
      >
        Cambia nome
      </button>

      <Routes>
      <Route path="/" element={
          <Suspense fallback={<Loading/>}>
            <Home />
          </Suspense>
        } />
        <Route path="/new-post" element={
          <Suspense fallback={<Loading/>}>
            <NewPost />
          </Suspense>
        } />
        <Route path="/messages" element={
          <Suspense fallback={<Loading/>}>
            <Messages />
          </Suspense>
        } />
        <Route path="/friends" element={
          <Suspense fallback={<Loading/>}>
            <Friends />
          </Suspense>
        } />
        <Route path="/login" element={
          <Suspense fallback={<Loading/>}>
            <Login />
          </Suspense>
        } />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;