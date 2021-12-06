import React from 'react'
import { TextField, MenuItem } from '@material-ui/core'

const selection = ({ values, valueOf, change, placeholder, defaults }) => {
    return (
        <select required style={{ width: "100%"}} select value={valueOf}  onChange={(e) => { change(e.target.value) }} label={placeholder}>
            <option value={defaults}>{defaults}</option>
            {values.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}

export default selection;