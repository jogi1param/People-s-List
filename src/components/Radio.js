import React from 'react';

const Radio = (props) => {
    let {value} = props,
        selectDiv = {
            position: "absolute",
            top: "100px",
            left: "550px"
        }

    return(
    <form>
        <div style={selectDiv} onClick={props.onRadioClick}>
            <label htmlFor="name">Name</label>
            <input type="radio" id="name" name="radio" value="name" />
            <label htmlFor="age">Age</label>
            <input type="radio" id="age" name="radio" value="age" />
        </div>
    </form>
    )
}

export default Radio