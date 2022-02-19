import React from 'react';

const CommentDetail = function(){
    return(
        <div className='comment'>
        <a href='/' className='avator'>
            <img src='faker.image.image()' alt='avator'/>
        </a>
        <div className='content'>
            <a href ='/' className='author'>Sam</a>
            <div className='metadata'>
                <span className='date'>today at6:00 pm</span>                       
            </div>
            <div className='text'>nice cbro</div>
        </div>
    </div>
    );
}