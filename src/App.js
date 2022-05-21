import "./App.css";
import HeaderTop from "./components/header/headerTop/HeaderTop";
// import Home from './components/home/Home';
import "./App.css";
import HomeRoute from "./components/router/HomeRoute";
import HeaderNav from "./components/header/headerNav/HeaderNav,";
import FooterUI from "./components/footer/FooterUI";
import Copyright from "./components/footer/copyright/Copyright";
import ResponsiveNav from "./components/header/headerNav/ResponsiveNav";
// import Loader from "react-js-loader";

function App() {
  return (
    <div className="App">
      {/* Header Top  */}

      <HeaderTop />

      {/* Header NavBar Section */}
      {/* <HeaderNav /> */}
      <ResponsiveNav />

      {/* Home Route Section */}
      <HomeRoute />

      {/* Footer Section */}
      <FooterUI />

      {/* Copyright Section */}
      <Copyright />
    </div>
  );
}

export default App;
