import React from "react";
import Loader from './Loader'

const Keypad = ({ keyPressed, loading }) => {
    const buttonContents = ['1','2','3','4','5','6','7','8','9','*','0','#']
    const row_item_count = 3;

    const chunkArray = () => {
        let keyPad = [];
        for(let i = 0; i < buttonContents.length; i += row_item_count) {
            keyPad.push(buttonContents.slice(i, i+row_item_count));
        }
        return keyPad;
    }
  
    return (
        <div className="btn-group-vertical w-100 mt-3">
            {chunkArray().map((row, i) => (
                <div key={i} className="btn-group">
                {row.map((key, j) => (
                    <button
                        className="btn btn-outline-secondary py-3"
                        onClick={() => keyPressed(key)}
                        key={key}>
                            {key}
                        </button>
                    )
                )}
                </div>
            ))}
            <Loader loading={loading} />
        </div>
    );
}

export default Keypad;