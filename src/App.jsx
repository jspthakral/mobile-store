import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <Navbar headerName="React Mobile Store" />
      <Main
        h1="Welcome to the mobile store"
        p="This mobile store website is built on reactJS"
        buttonName="Get Started"
      />
      <Products />
      <Todo />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
