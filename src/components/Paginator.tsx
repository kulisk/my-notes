import React from 'react';
import styled from "styled-components";
import Icon from "./Icon";
import PaginatorButton from "./PaginatorButton";
import {useSelector} from "react-redux";
import {RootState} from "../reducers/store";

interface PaginatorInterface {
    className?: string
}

const StyledPaginator = styled.div<PaginatorInterface>`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Paginator: React.FC<PaginatorInterface> =
    ({
         className
     }) => {
        const pages: Array<number> = useSelector((state: RootState) => state.pages.pages)
        return (
            <StyledPaginator className={className}>
                <PaginatorButton className={'me-5'}>
                    <Icon src={'/icons/back.svg'} notHover/>
                </PaginatorButton>
                <div className={'d-flex'}>
                    {
                        pages.map(item =>
                            <PaginatorButton key={item}>{item}</PaginatorButton>
                        )
                    }
                </div>
                <PaginatorButton className={'ms-5'}>
                    <Icon src={'/icons/next.svg'} notHover/>
                </PaginatorButton>
            </StyledPaginator>
        );
    };

export default Paginator;