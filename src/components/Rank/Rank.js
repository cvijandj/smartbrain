import React from 'react';

const Rank = ({ name, entries}) => {
    
      
    return (
        <div>
        <div className='white f5 f3-ns'>
            { name + ', your current entry count is'}
        </div>
        <div className='white f4 f2-ns'>
            {entries}
        </div>
        </div>
        
    )
}



export default Rank;