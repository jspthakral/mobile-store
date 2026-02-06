import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Navbar headerName="Mobile Store" />
      <Main
        h1="Welcome to the mobile store"
        p="This mobile store website is built on reactJS"
        buttonName="Get Started"
      />
      <Products />
      <Footer />
    </>
  );
}

export default App;
