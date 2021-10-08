import React from 'react';

interface PageTitleProps {
    title: string;
    subtitle: string;
}

export const PageTitle: React.FC<PageTitleProps> = (props) => {
    return (
        <div>
            {props.title}
            {props.subtitle}
        </div>
    );
}