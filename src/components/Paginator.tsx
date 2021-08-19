import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Icon from './Icon';
import PaginatorButton from './PaginatorButton';
import { goToPage } from '../reducers/NoteReducer';

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
  justify-content: space-between;

  .flexEndWrapper {
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
  }
`;

const Paginator: React.FC<PaginatorInterface> = ({
  className,
  currentPage,
  totalPages,
  route,
}) => {
  const dispatch = useDispatch();
  const onPaginatorClick = (page: number) => {
    dispatch(goToPage(page));
  };

  return (
    <StyledPaginator className={className}>

      {
                (currentPage > 1 && (
                <NavLink to={`${route}${currentPage - 1}`}>
                  <PaginatorButton onClick={() => onPaginatorClick(currentPage - 1)}>
                    <Icon src="/icons/back.svg" notHover />
                  </PaginatorButton>
                </NavLink>
                ))
            }

      {currentPage < totalPages && (
        <div className="flexEndWrapper">
          <NavLink to={`${route}${currentPage + 1}`}>
            <PaginatorButton onClick={() => onPaginatorClick(currentPage + 1)}>
              <Icon src="/icons/next.svg" notHover />
            </PaginatorButton>
          </NavLink>
        </div>
      )}

    </StyledPaginator>
  );
};

export default Paginator;
