import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'


const style = {
    margin: 50,
};


const Button = (props) => (
    <div>
        <RaisedButton
            label="Primary"
            primary={true}
            style={style}
            onClick={props.onClick}
        />
    </div>
)

export default Button 