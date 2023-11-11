import Overlay from "../overlay/Overlay";
import {arrayWithValues, moveItem, moveItemByKeyboard, shuffle, useKeyPress} from "../../utils/utils";
import CellImage from "../cell/CellImage";
import React from "react";
import getImagesForDimension from "../../mockdata/data";

const DEFAULT_DIMENSION = 4

class Field extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dimension: DEFAULT_DIMENSION
        }

        this.onNewGame()
    }

    onCellClick = (index) => {
        let newImages = moveItem(this.state.currentImagesState, index, this.state.dimension)
        this.setState({
            currentImagesState: newImages
        });
        this.checkWin()
    }

    handleKeyDown = (event) => {
        let newImages = moveItemByKeyboard(this.state.currentImagesState, event.key, this.state.dimension)
        this.setState({
            currentImagesState: newImages
        });
        this.checkWin()
    }
    checkWin = () => {
        let currentImagesState = this.state.currentImagesState
        let initialImages = this.state.initialImages
        if (currentImagesState.length !== initialImages.length) {
            return
        }
        if (!currentImagesState.every((element, index) => element === b[index])) {
            return;
        }
        alert("Congrat!")
    }

    onNewGame = () => { // TODO: добавить кнопку новая игра
        let dimension = this.state.dimension
        let images = getImagesForDimension(dimension)

        const randomIndex = Math.floor(Math.random() * images.length);
        let initialImages = new Array(...images)
        initialImages.splice(randomIndex, 1, null)
        console.log(arrayWithValues(initialImages))

        this.setState({
            initialImages: initialImages,
            currentImagesState: shuffle(initialImages)
        })
    }

    onNewDimension = (dimension) => { // TODO: добавить селектор/инпут
        this.setState({
            dimension: dimension,
        })
        this.onNewGame()
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
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