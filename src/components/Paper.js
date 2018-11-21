import React from 'react'
import MuiPaper from 'material-ui/Paper'

const style = {
    margin: 50,
    padding: 50
};

const Paper = (props) => (
    <MuiPaper
        style={style}
    >
        {props.children}
    </MuiPaper>
)

export default Paper