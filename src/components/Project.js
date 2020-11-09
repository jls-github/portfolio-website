import React from 'react';

const Project = ({title, frontPicture, backPicture, description, liveSite, github}) => {
    return (
        <div>
            <div>Title: {title}</div>
            <div>Description: {description}</div>
            <div>Live Site: {liveSite}</div>
            <div>Github: {github}</div>
        </div>
    )
}

export default Project