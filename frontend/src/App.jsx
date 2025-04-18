import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import AllRecipe from "./components/AllRecipe";
import AddRecipe from "./components/AddRecipe";
import Login from "./components/login";
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <AllRecipe />
            </>
          }
        ></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/allRecipe" element={<AllRecipe></AllRecipe>}></Route>
        <Route path="/addRecipe" element={<AddRecipe></AddRecipe>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
