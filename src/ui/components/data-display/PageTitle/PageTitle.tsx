import React from 'react';
import { PageTitleContainer, PageTitleStyled } from './PageTitle.style';

interface PageTitleProps {
    title: string;
    subtitle: string;
}

export const PageTitle: React.FC<PageTitleProps> = (props) => {
    return (
        <PageTitleContainer>
            <PageTitleStyled>{props.title}</PageTitleStyled>

            {props.subtitle}
        </PageTitleContainer>
    );
}