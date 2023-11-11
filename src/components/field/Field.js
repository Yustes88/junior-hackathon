import Overlay from "../overlay/Overlay";

function Field() {
    return(
        <div className="relative">
            <div className="grid cell relative overflow-hidden rounded-sm border-4 border-solid border-gray-600">
                <Overlay/>
            </div>
        </div>
    )
}


export default Field;