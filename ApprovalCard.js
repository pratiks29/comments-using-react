import React from 'react';

const ApprovalCard = function(props){
    return (
        <div className='ui card'>
            <div className='content'>{props.children}</div>
            <div className='extra content'>
                <div className='ui two buttons'>
                    <div className='ui basic green button'>yees</div>
                    <div className='ui basic red button'>no</div>
                </div>
            </div>
        </div>
    );
};

export default ApprovalCard;