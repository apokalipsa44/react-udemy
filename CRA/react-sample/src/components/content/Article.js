import React from 'react';

const Article = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <p style={{
                fontSize: "10"
            }}>{props.author}</p>
            <span style={{
                fontSize: "16",
                fontStyle: "italic"
            }}>{props.text}</span>
        </div>
    );
};

export default Article;