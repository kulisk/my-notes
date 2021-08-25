import React from 'react';
import styled from 'styled-components';
import { NavLink, useParams } from 'react-router-dom';
import Icon from './Icon';
import PaginatorButton from './PaginatorButton';
import { HOME_ROUTE } from '../const/routes';
import { breakpoints } from '../styles/variables';

interface PaginatorInterface {
    className?: string
    totalPages: number
    route: string
}

interface StyledPaginatorInterface {
    className?: string
}

interface Params {
    page: string
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

  @media (max-width: ${breakpoints.s}) {
    padding: 0 2rem;
  }
`;

const Paginator: React.FC<PaginatorInterface> = ({
  className,
  totalPages,
  route,
}) => {
  const params: Params = useParams();
  const page = params.page ? +params.page : 1;
  const routeService = () => (route === HOME_ROUTE ? route : `${route}/`);
  return (
    <StyledPaginator className={className}>
      {page > 1 && (
        <NavLink to={`${routeService()}${page - 1}`}>
          <PaginatorButton>
            <Icon src="/icons/back.svg" notHover />
          </PaginatorButton>
        </NavLink>
      )}

      {page < totalPages && (
        <div className="flexEndWrapper">
          <NavLink to={`${routeService()}${page + 1}`}>
            <PaginatorButton>
              <Icon src="/icons/next.svg" notHover />
            </PaginatorButton>
          </NavLink>
        </div>
      )}
    </StyledPaginator>
  );
};
export default Paginator;
