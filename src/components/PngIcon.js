import React from 'react';

const PngIcon = ({ src, alt, className }) => {
    return (
        <img 
            src={src} 
            alt={alt} 
            className={className}
        />
    );
};

export default PngIcon;
