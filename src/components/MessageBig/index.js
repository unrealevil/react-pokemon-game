import React from 'react';
import s from './messagebig.module.css';

const MessageBig = ({color, children}) => {
    const style = {
        color
    }
    return (
        <div className={s['message-big']} style={style} >
            {children}
        </div>
    );
}

export default MessageBig;

