import React from 'react'
import { TextField, MenuItem } from '@material-ui/core'

const selection = ({ values, valueOf, change, placeholder }) => {
    return (
        <TextField style={{ width: "100%"}} select value={valueOf} onChange={(e) => { change(e.target.value) }} label={placeholder}>
            {values.map((option) => (
                <MenuItem key={option} value={option}>
                    {option}
                </MenuItem>
            ))}
        </TextField>
    );
}

export default selection;