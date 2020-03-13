import React, { useState } from 'react';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import 'typeface-roboto';



function Buttons() {

    const ButtonsGroup = [
        {
            label: 'Homestay',
            value: 'homestay'
        },
        {
            label: 'Hotel',
            value: 'hotel'
        },
        {
            label: 'Villa',
            value: 'villa'
        },
        {
            label: 'Resort',
            value: 'resort'
        }
    ]

    const [buttonValue, setButtonValue] = useState('');

    const useStyles = makeStyles({
        root: {
            background: '#FFFFFF',
            borderRadius: 6,
            color: '#1A051D',
        },
        label: {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 13,
            display: 'flex',
            alignItems: 'center'
        },
        selected: {
            background: 'linear-gradient(199.65deg, #BD7AE3 0%, #8461C9 100%)',
            borderRadius: 6,
            color: '#FFFFFF'
        }
    })
    const classes = useStyles();

    const StyledToggleButtonGroup = withStyles(theme => ({
        grouped: {
            margin: theme.spacing(0.5),
            border: 'none',
            padding: theme.spacing(0, 1),
            '&:not(:first-child)': {
                borderRadius: theme.shape.borderRadius,
            },
            '&:first-child': {
                borderRadius: theme.shape.borderRadius,
            },
        },
    }))(ToggleButtonGroup);

    const handleClick = (e: React.MouseEvent<HTMLElement>, newValue: string) => {
        setButtonValue(newValue);
    }

    return (
        <div>
            <StyledToggleButtonGroup value={buttonValue} onChange={handleClick} exclusive>
                {
                    ButtonsGroup.map((button, i: number) => (
                        <ToggleButton classes={{
                            root: classes.root,
                            label: classes.label,
                            selected: classes.selected
                        }} value={button.value} key={i} >{button.label}</ToggleButton>
                    ))
                }
            </StyledToggleButtonGroup>
        </div>
    );
}


export default Buttons;