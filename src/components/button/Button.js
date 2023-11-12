import { Fragment } from "react";

export function Button({text, onClick}) {
        const button = {
            text,
            onClick,
          };
        
          return (
            <Fragment>
              <button type="button" onClick={button.onClick} className="rounded-md mr-2 bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
>{button.text}</button>
            </Fragment>
          );
}