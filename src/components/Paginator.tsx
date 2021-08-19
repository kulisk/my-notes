import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';
import PaginatorButton from './PaginatorButton';
import RegularText from './RegularText';
import { colors } from '../styles/variables';

interface PaginatorInterface {
    className?: string
    totalPages: number
    currentPage: number
    route: string
}

interface StyledPaginatorInterface {
    className?: string
}

const StyledPaginator = styled.div<StyledPaginatorInterface>`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Paginator: React.FC<PaginatorInterface> = ({
  className,
  currentPage,
  totalPages,
  route,
}) => (
  <StyledPaginator className={className}>
    <PaginatorButton className="me-5">
      <Icon src="/icons/back.svg" notHover />
    </PaginatorButton>
    <div className="d-flex">
      {
                currentPage !== 1 && (
                <NavLink
                  to={`${route}${currentPage - 1}`}
                >
                  <PaginatorButton>{currentPage - 1}</PaginatorButton>
                </NavLink>
                )
            }
      <div>
        <NavLink
          to={`${route}${currentPage}`}
        >
          <PaginatorButton>{currentPage}</PaginatorButton>
        </NavLink>
      </div>
      {
                currentPage !== totalPages && (
                <NavLink
                  to={`${route}${currentPage + 1}`}
                >
                  <PaginatorButton>{currentPage + 1}</PaginatorButton>
                </NavLink>
                )
            }
      {
                currentPage !== totalPages - 1 && currentPage !== totalPages && (
                <div style={{ margin: '0 1rem', display: 'flex', alignItems: 'center' }}>
                  <RegularText color={colors.primary}>...</RegularText>
                </div>
                )
            }
      {
                currentPage !== totalPages && currentPage !== totalPages - 1 && (
                <NavLink
                  to={`${route}${totalPages}`}
                >
                  <PaginatorButton>{totalPages}</PaginatorButton>
                </NavLink>
                )
            }
    </div>
    <PaginatorButton className="ms-5">
      <Icon src="/icons/next.svg" notHover />
    </PaginatorButton>
  </StyledPaginator>
);

export default Paginator;
