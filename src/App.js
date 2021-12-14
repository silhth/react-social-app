import Header from "./components/Header";
import Footer from "./components/Footer";
import AddVAT from "./components/AddVAT";

function App() {
  const name = "Feisbrut";
  const nav = [
    { link: "/", label: "Home" },
    { link: "/messages", label: "Messages" },
    { link: "/friends", label: "Friends" },
  ];

 
  

  return (
    <div>
      <Header name={name} links={nav} />     
      <AddVAT price={100} vat={0.22} />
      <Footer />
    </div>
  );
}

export default App;