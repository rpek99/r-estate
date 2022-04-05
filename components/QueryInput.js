import { useState, React } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

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
    const [personName, setPersonName] = useState([]);

    const {queryName, options, type} = props;

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;

        setPersonName(
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
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput label={queryName} />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                        {options.map((option) => (
                            <MenuItem key={option} value={option}>
                                <Checkbox checked={personName.indexOf(option) > -1} />
                                <ListItemText primary={option} />
                            </MenuItem>
                        ))}
                    </Select> : 
                    <Select MenuProps={MenuProps} input={<OutlinedInput label="Price" />}>
                        <Typography sx={{ marginTop: 2, marginLeft: 2, fontSize: 16}}>Price range</Typography>
                        <Divider sx={{ m: 1, marginLeft: 2, width: 100}}/>
                        <Grid container sx={{ m: 1, marginTop: 1}}>
                            <Grid item>
                                <FormControl size="small" sx={{ m: 1, maxWidth: 150 }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">Min Amount</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        label="Amount"
                                        // value={values.amount}
                                        // onChange={handleChange('amount')}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <Typography sx={{ m: 1, marginTop: 2, fontSize: 15}}>-</Typography>
                            </Grid>
                            <Grid item>
                                <FormControl size="small" sx={{ m: 1, maxWidth: 150 }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">Max Amount</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        label="Amount"
                                        // value={values.amount}
                                        // onChange={handleChange('amount')}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Select> }
        </FormControl> 
    )
}

export default QueryInput;