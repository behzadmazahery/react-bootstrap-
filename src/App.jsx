import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Category from "./components/Category";
import Products from "./components/Products";
import Parallax from "./components/parallax/Parallax";
import Blogs from "./components/Blogs";
import Users from "./components/UsersBox"
const App = () => {
  return (
    <div className='header position-relative'>
      <Navbar/>
      <Slider />
      <Category/>
      <Products/>
      <Parallax/>
      <Blogs/>
      <Users/>
    </div>
  )
}

export default App