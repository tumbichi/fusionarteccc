import React from 'react';
import {Wrapper} from './styles';

const Button = ({text , onClick}) => {
    return (
        <Wrapper onClick={onClick}> 
            {text}
        </Wrapper>
    )
}

export default Button
