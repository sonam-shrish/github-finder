import React from 'react';
import spinner from './spinner.gif';//bring in the image

function Spinner() {
    return(
        <div>
            <img src={spinner} alt='Loading' style={{margin:'auto', width: '200px', display:'block'}} />
        </div>
        )

}

export default Spinner
