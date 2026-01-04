import "./App.css";
import "./routes";
import { useRoutes } from "react-router";
import routes from "./routes";
import SideBar from "./component/sideBar";
import NavBar from "./component/navBar";
import "./App.css";

function App() {
  const router = useRoutes(routes);

  return (
    <>
      <SideBar></SideBar>
      <div className="ml-17.5 sm:ml-35">
        <NavBar></NavBar>
      </div>
      <main className="ml-25">{router}</main>
    </>
  );
}

export default App;
