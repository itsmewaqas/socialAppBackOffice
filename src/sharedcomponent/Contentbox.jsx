import React, { useState } from 'react';

function Contentbox(props) {

    return (
        <div className="dataBox clearfix">
            <div className='dataBoxInner'>
                <h2><span>{props.Title}</span><i>{props.subTitle}</i></h2>
                {props.children}
            </div>
        </div>
    );
}

export default Contentbox;
