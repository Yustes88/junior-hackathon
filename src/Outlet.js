import Gallery from "./Gallery";
import GameField from "./GameField";

function Outlet({location}) {
    return (
      <>
        <div>
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