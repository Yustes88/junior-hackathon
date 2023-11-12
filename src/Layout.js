import { useLocation } from "react-router-dom";
import Outlet from "./Outlet";
import Header from "./components/Header";
import { Button } from "./components/button/Button";
import { useState } from "react";

function Layout() {
  const [open, setOpen] = useState(true)
    const location = useLocation();

    return (
      <div>
      <header className="flex justify-center items-center mt-2">
        <Button text={'Вернуться к правилам'} onClick={() => setOpen(true)}/>
      </header>
        <main className="flex justify-center items-center mt-20">
          <Outlet location={location} open={open} setOpen={setOpen} />
        </main>
        <footer>Test footer</footer>
      </div>
    );
  }

  export default Layout;