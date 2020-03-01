import React from 'react'

const Display = ({ value, text, code }) => (
    <div>
        <h3 className="text-center mt-4">{text}</h3>
        <p className="text-right">{value} RON</p>
        <input className="text-center form-control-lg w-100 mb-2" value={code} disabled />
    </div>
)

export default Display