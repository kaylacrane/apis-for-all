import React from 'react';

function ResultsList(props) {
    const {body, url, author} = props;
    return (
        <div>
            <a href={url}><p>{body}</p></a><span>By {author}</span>
            
        </div>
    )
}

export default ResultsList
