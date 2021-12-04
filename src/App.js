import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import AllRecipes from "./components/AllRecipes/AllRecipes";
import CreateRecipe from "./components/Create/CreateRecipe";
import Header from "./components/Header/Header";
import Login from "./components/Main/Login/Login";
import Register from "./components/Register/Register";
import Categories from "./components/Main/Categories/Categories";
import Footer from "./components/Main/Footer/Footer";
import Recipes from "./components/Main/NewRecipes/Recipes";
import Recipe from "./components/Main/Recipe/Recipe";
import WithMeat from "./components/Main/WithMeat/WithMeat";
import Dashboard from "./components/Main/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="site-content">
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </main>
      <Footer />    
    </div>
  );
}

export default App;
