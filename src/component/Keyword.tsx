import React from 'react';

export const Keyword: React.FC<{ onClick: any; text: string }> = ({ onClick, text }) => {
    return (
        <div onClick={onClick} className="keyword">
            {text}
        </div>
    );
};
