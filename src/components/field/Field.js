import Overlay from "../overlay/Overlay";
import {arrayWithValues, moveItem, shuffle} from "../../utils/utils";
import CellImage from "../cell/CellImage";
import React from "react";
import getImagesForDimension from "../../mockdata/data";

const DEFAULT_DIMENSION = 4

class Field extends React.Component {

    constructor(props) {
        super(props);

        let images = getImagesForDimension(DEFAULT_DIMENSION)

        const randomIndex = Math.floor(Math.random() * images.length);
        let initialImages = new Array(...images)
        initialImages.splice(randomIndex, 1, null)
        console.log(arrayWithValues(initialImages))

        this.state = {
            dimension: DEFAULT_DIMENSION,
            initialImages: initialImages,
            currentImagesState: shuffle(initialImages)
        }
    }

    onCellClick = (index) => {
        let newImages = moveItem(this.state.currentImagesState, index, this.state.dimension)
        this.setState({
            currentImagesState: newImages
        });
    }

    render() {
        return (
            <div className="relative">
                <div className="grid cell relative overflow-hidden rounded-sm border-4 border-solid border-gray-600">
                    <Overlay/>
                    {this.state.currentImagesState.map((image, i) => (
                        <CellImage key={i} image={image} index={i} onClick={() => {
                            this.onCellClick(i)
                        }}/>
                    ))}
                </div>
            </div>
        )
    }
}


export default Field;