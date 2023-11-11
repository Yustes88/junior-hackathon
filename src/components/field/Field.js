import Overlay from "../overlay/Overlay";
import images from "../../mockdata/data";
import {arrayWithValues, shuffle} from "../../utils/utils";
import CellImage from "../cell/CellImage";

function Field() {
    const shuffledImages = shuffle(images)
    const valuesArray = arrayWithValues(images)
    console.log(shuffledImages, valuesArray)

    return(
        <div className="relative">
            <div className="grid cell relative overflow-hidden rounded-sm border-4 border-solid border-gray-600">
                <Overlay/>
                {shuffledImages.map((image, i) => (
                 <CellImage key={i} image={image} index={i}/>
            ))}
            </div>
        </div>
    )
}


export default Field;