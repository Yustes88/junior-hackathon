import { useLocation } from "react-router-dom";
import Outlet from "./Outlet";
import Header from "./components/Header";
import { Button } from "./components/button/Button";
import { useState } from "react";
import Footer from "./components/footer/Footer";

function Layout() {
  const [open, setOpen] = useState(true)
    const location = useLocation();

    return (
      <div className="h-[100vh] relative overflow-hidden">
      <header className="flex justify-center items-center mt-2">
        <Button text={'Вернуться к правилам'} onClick={() => setOpen(true)}/>
      </header>
        <main className="flex justify-center items-center my-10">
          <Outlet location={location} open={open} setOpen={setOpen} />
        </main>
        <Footer/>
      </div>
    );
  }

  export default Layout;