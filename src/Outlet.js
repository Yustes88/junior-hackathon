import Gallery from "./gallery/Gallery";
import {useState} from "react";
import GameField from "./GameField";
import ModalStart from "./components/modals/ModalStart";

function Outlet({location, open, setOpen}) {
    return (
      <>
          <ModalStart open={open} setOpen={setOpen}/>
        {
            location.pathname === '/' ?
              <GameField/> :
              <Gallery />
          }
      </>
    );
}

export default Outlet;