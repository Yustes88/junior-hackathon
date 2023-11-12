import { useLocation, useNavigate } from "react-router-dom";
import Outlet from "./Outlet";
import Header from "./components/Header";
import { Button } from "./components/button/Button";
import { useState } from "react";
import Footer from "./components/footer/Footer";
import Gallery from "./gallery/Gallery";

function Layout() {
  const [open, setOpen] = useState(true)
    const location = useLocation();
    let navigate = useNavigate(); 


    return (
      <div className="h-[100vh] relative overflow-hidden">
      <header className="flex justify-center items-center mt-2">
      {
            location.pathname === '/' ?
            <div>
              <Button text={'Вернуться к правилам'} onClick={() => setOpen(true)}/> 
              <Button text={'Галерея картинок'} onClick={() => navigate("/gallery")}/> 
            </div> :
            <Button text={'Вернуться к игре'} onClick={() => navigate("/")}/>
          }

      </header>
        <main className="flex justify-center items-center my-10">
          <Outlet location={location} open={open} setOpen={setOpen} />
        </main>
        <Footer/>
      </div>
    );
  }

  export default Layout;