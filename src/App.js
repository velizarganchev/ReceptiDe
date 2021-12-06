import { useState, useEffect } from "react";
import * as authService from "./services/authService";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import AllRecipes from "./components/AllRecipes/AllRecipes";
import CreateRecipe from "./components/Create/CreateRecipe";
import Header from "./components/Header/Header";
import Login from "./components/Main/Login/Login";
import Register from "./components/Main/Register/Register";
import Footer from "./components/Main/Footer/Footer";
import Dashboard from "./components/Main/Dashboard/Dashboard";
import AllProdukts from "./components/AllProdukts/AllProdukts";
import MainDishes from "./components/AllRecipes/MainDishes/MainDishes";
import Soups from "./components/AllRecipes/Soups/Soups";
import Salads from "./components/AllRecipes/Salads/Salads";
import Desserts from "./components/AllRecipes/Desserts/Desserts.js";

function App() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    isAuthenticated: false,
  });

  useEffect(() => {
    let user = authService.getUser();    

    setUserInfo({
      userInfo: user,
      isAuthenticated: Boolean(user),
    });
  }, []);

const loginHandler = (username) =>{
  setUserInfo({
    user: username,
    isAuthenticated: true,
  })}

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
          <Route path="/login" element={<Login loginHandler={loginHandler}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/all-recipes" element={<AllRecipes />} />
          <Route path="/all-produkts" element={<AllProdukts />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;
