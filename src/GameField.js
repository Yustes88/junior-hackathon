import Field from "./components/field/Field";

function GameField({setOpen}) {
    return(
        <div> 
            <Field setOpen={setOpen}/>
        </div>
    )
}

export default GameField;