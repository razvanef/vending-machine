import React from 'react'

const ConsoleButtons = ({ buttons, pressButton }) => (
    <div className="btn-group mt-3 w-100">
        {buttons.map(button => 
            <button className="btn btn-secondary py-3"
                onClick={() => pressButton(button.value)}
                key={button.value}
            >
                {button.name}
            </button>
        )}
    </div>
)

export default ConsoleButtons