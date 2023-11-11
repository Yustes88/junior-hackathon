import Overlay from "../overlay/Overlay";

function Field() {
    const shuffleImages = () => 
    new Array(16)
    .fill()
    .map((_,i) => i+1)
    .sort(() => Math.random() -.5)
    .map((x,i) => ({value : x , index : i}))
    console.log(shuffleImages())


    return(
        <div className="relative">
            <div className="grid cell relative overflow-hidden rounded-sm border-4 border-solid border-gray-600">
                <Overlay/>
            </div>
        </div>
    )
}


export default Field;