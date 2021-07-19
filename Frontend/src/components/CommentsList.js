import React from 'react'

function CommentsList() {
    return (
        <>
            <h3 classname="sm:text-2xl text-xl font-bold mt-6 mb-6 text-gray-900">Comments :</h3>
            {CommentsList.map((comment, index) =>(
               <div key={index}>
               <h4 className='text-xl font-bold'>{comment.username}</h4>
               <p classname='mt-1 mb-4'>{comment.text}</p>
               </div>
            ))}
        </>
    )
}

export default CommentsList
