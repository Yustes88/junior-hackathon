import Overlay from "../overlay/Overlay";

function Field() {
    return(
        <div className="relative">
            <div className="grid grid-cols-4 grid-rows-4 relative overflow-hidden rounded-sm border-8 border-solid border-gray-600">
                <Overlay/>
            </div>
        </div>
    )
}


export default Field;