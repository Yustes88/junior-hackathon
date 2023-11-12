import Gallery from "./Gallery";
import GameField from "./GameField";
import ModalStart from "./components/modals/ModalStart";

function Outlet({location}) {
    return (
      <>
        <div>
          <ModalStart/>
        {
            location.pathname === '/' ?
              <GameField /> :
              <Gallery />
          }
        </div>
      </>
    );
  }

  export default Outlet;