import { useLocation } from "react-router-dom";
import Outlet from "./Outlet";

function Layout() {
    const location = useLocation();

    return (
      <div>
    <div className="App w-full h-full">
      <header>
        <h1>
        Hello world!
        </h1>
      </header>
    </div>
        <main>
          <Outlet location={location} />
        </main>
        <footer>Test footer</footer>
      </div>
    );
  }

  export default Layout;