import React from "react";


const Scroll = (props) => {
    return (
        <div style = {{overflowY: 'scroll', height: '800px', scrollbarWidth: 'none', background: 'transparent' }}>
            {props.children}
        </div>
    );
}


export default Scroll;



