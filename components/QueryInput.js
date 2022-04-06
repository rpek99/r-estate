import { useState, React } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import OutlinedInput from '@mui/material/OutlinedInput';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        maxWidth: 380,
        maxHeight: 200
      },
    },
  };



const QueryInput = (props) => {
    const [value, setValue] = useState([]);

    const {queryName, options, type} = props;

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;

        setValue(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <FormControl sx={{ m: 1, width: 220, marginTop: 2}} size="small">
            <InputLabel id="demo-multiple-checkbox-label">{queryName}</InputLabel>
                {type === "checkBox" ?
                    <Select
                        multiple
                        value={value}
                        onChange={handleChange}
                        input={<OutlinedInput label={queryName} />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                        {options.map((option) => (
                            <MenuItem key={option} value={option}>
                                <Checkbox checked={value.indexOf(option) > -1} />
                                <ListItemText primary={option} />
                            </MenuItem>
                        ))}
                    </Select> : 
                    <Select
                        value={value}
                        onChange={handleChange}
                        input={<OutlinedInput label={queryName} />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                        {options.map((option) => (
                            <MenuItem key={option} value={option}>
                                <ListItemText primary={option} />
                            </MenuItem>
                        ))}
                    </Select> } 
        </FormControl> 
    )
}

export default QueryInput;