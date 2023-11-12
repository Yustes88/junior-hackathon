import { useState } from "react";
import Gallery from "./Gallery";
import GameField from "./GameField";
import ModalStart from "./components/modals/ModalStart";

function Outlet({location, open, setOpen}) {

    return (
      <>
        <div>
          <ModalStart open={open} setOpen={setOpen}/>
        {
            location.pathname === '/' ?
              <GameField/> :
              <Gallery />
          }
        </div>
      </>
    );
  }

  export default Outlet;