function Overlay() {
    return new Array(16)
    .fill()
    .map((_,i) => 
    <div key={i} className="z-index pointer-events-none	border border-10 border-solid border-gray-6as00"/>)
}

export default Overlay;