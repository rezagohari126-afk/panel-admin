import "./App.css";
import "./routes";
import { useRoutes } from "react-router";
import routes from "./routes";
import SideBar from "./component/sideBar";
import NavBar from "./component/navBar";
import { useSidebar } from "./component/sidebarContext";
import "./App.css";

function App() {
  const router = useRoutes(routes);
   const { open } = useSidebar();

  return (
    <>
      <div className="flex h-dvh overflow-hidden">
      {/* Sidebar */}
      <SideBar />

      {/* Content */}
      <div
        className={`flex flex-col flex-1 min-w-0 transition-all duration-300
        ${open ? "pl-57.5" : "pl-17.5"}`}
      >
        <NavBar />
        <main className="flex-1 overflow-y-auto px-4">{router}</main>
      </div>
    </div>
    </>
  );
}

export default App;
