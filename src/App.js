import { useState, useEffect } from "react";
import * as authService from "./services/authService";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
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
  const [userInfo, setUserInfo] = useState({
    username: "",
    isAuthenticated: false,
  });

  useEffect(() => {
    let user = authService.getUser();

    setUserInfo({
      user,
      isAuthenticated: Boolean(user),
    });
  }, []);

  const loginHandler = (username) => {
    setUserInfo({
      user: username,
      isAuthenticated: true,
    });
  };

  return (
    <div className="App">
      <Header {...userInfo} />
      <main className="site-content">
        <Routes>
          <Route path="/*" element={<Dashboard />} />
          <Route path="/main-dishes" element={<MainDishes />} />
          <Route path="/soups" element={<Soups />} />
          <Route path="/salads" element={<Salads />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/my-recipes" element={<MyRecipes {...userInfo} />} />
          <Route
            path="/login"
            element={<Login loginHandler={loginHandler} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/recipeDetails/:recipeId" element={<Details />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;
