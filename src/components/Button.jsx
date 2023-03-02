import React from 'react'
import { Link } from 'react-router-dom';
import './button.css'

const styles = ['btn--primary', 'btn--outline'];
const sizies = [ 'btn--medium' , 'btn--large'];
function Button({text ,type , buttonStyle, buttonSize,onClick ,icon}) {

    const checkButtonStyle = styles.includes(buttonStyle)? buttonStyle: styles[0]
    const checkButtonSize = styles.includes(buttonSize)? buttonSize: sizies[0]
    return (
        <Link to ='/signup'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            type = {type}
            onClick = {onClick}
            >
                {text} {icon}
            </button>
        </Link>
    )
}

export default Button
