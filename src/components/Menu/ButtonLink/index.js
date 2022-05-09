import React from 'react';

function Button(props) {
    return (
        <a className={props.className} href={props.href}>
            Novo Vídeo
        </a>
    );
}

export default Button;
