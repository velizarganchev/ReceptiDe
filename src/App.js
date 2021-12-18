import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import CreateRecipe from "./components/Create/CreateRecipe";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Main/Register/Register";
import Footer from "./components/Main/Footer/Footer";
import Dashboard from "./components/Main/Dashboard/Dashboard";
import MainDishes from "./components/Main/Categories/MainDishes/MainDishes";
import Soups from "./components/Main/Categories/Soups/Soups";
import Salads from "./components/Main/Categories/Salads/Salads";
import Desserts from "./components/Main/Categories/Desserts/Desserts.js.js";
import MyRecipes from "./components/MyRecipe/MyRecipes";
import Details from "./components/Main/Recipes/Details";

function App() {
  

  return (
    <AuthProvider>
      <div className="App">
        <Header  />
        <main className="site-content">
          <Routes>
            <Route path="/*" element={<Dashboard />} />
            <Route path="/main-dishes" element={<MainDishes />} />
            <Route path="/soups" element={<Soups />} />
            <Route path="/salads" element={<Salads />} />
            <Route path="/desserts" element={<Desserts />} />
            <Route path="/my-recipes" element={<MyRecipes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create-recipe" element={<CreateRecipe />} />
            <Route path="/recipeDetails/:recipeId" element={<Details />} />
          </Routes>
        </main>
        <Footer />
      </div>
      </AuthProvider>
  );
}
export default App;
