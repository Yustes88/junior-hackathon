import Gallery from "./gallery/Gallery";
import GameField from "./GameField";

function Outlet({location}) {
    return (
      <>
        {
            location.pathname === '/' ?
              <GameField /> :
              <Gallery />
          }
      </>
    );
  }

  export default Outlet;