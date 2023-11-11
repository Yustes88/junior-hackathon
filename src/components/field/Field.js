import Overlay from "../overlay/Overlay";
import images from "../../mockdata/data";
import shuffle from "../../utils/utils";
import CellImage from "../cell/CellImage";

function Field() {
    const shuffledImages = shuffle(images)
    console.log(shuffledImages)

    return(
        <div className="relative">
            <div className="grid cell relative overflow-hidden rounded-sm border-4 border-solid border-gray-600">
                <Overlay/>
                {shuffledImages.map((image, i) => (
                 <CellImage key={i} image={image}/>
            ))}
            </div>
        </div>
    )
}


export default Field;