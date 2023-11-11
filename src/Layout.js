import { useLocation } from "react-router-dom";
import Outlet from "./Outlet";
import Header from "./components/Header";

function Layout() {
    const location = useLocation();

    return (
      <div>
    <div className="App">
      <Header/>
    </div>
        <main>
          <Outlet location={location} />
        </main>
        <footer>Test footer</footer>
      </div>
    );
  }

  export default Layout;