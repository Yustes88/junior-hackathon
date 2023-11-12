import { useLocation } from "react-router-dom";
import Outlet from "./Outlet";
import Header from "./components/Header";

function Layout() {
    const location = useLocation();

    return (
      <div>
      <header>
        <h1>
        Hello world!
        </h1>
      </header>
        <main className="flex justify-center items-center">
          <Outlet location={location} />
        </main>
        <footer>Test footer</footer>
      </div>
    );
  }

  export default Layout;