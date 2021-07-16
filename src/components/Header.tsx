import React from "react";
import {Container, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Heading from "./Heading";
import RegularText from "./RegularText";
import {HOME_ROUTE, LOGIN_ROUTE} from "../const/routes";
import Icon from "./Icon";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../reducers/store";
import {logout} from "../reducers/UserReducer";

const Header: React.FC = () => {
    const isAuth = useSelector((state: RootState) => state.repos.isAuth)

    const dispatch = useDispatch()

    function onLogoutClick() {
        dispatch(logout())
    }

    return (
        <Navbar className={'color-primary p-3 mb-5'} expand="sm">
            <Container>
                <NavLink style={{textDecoration: 'none'}} to={HOME_ROUTE}><Heading>My Notes</Heading></NavLink>
                {
                    isAuth &&
                    <div className={'d-flex align-items-center'}>
                        <RegularText color={'#fff'}>Username</RegularText>
                        <NavLink className={'ms-3'}
                                 style={{textDecoration: 'none'}}
                                 to={LOGIN_ROUTE}
                                 onClick={() => onLogoutClick()}>
                            <Icon src={'./icons/logout.svg'}/>
                        </NavLink>
                    </div>
                }
            </Container>
        </Navbar>
    )
}

export default Header;
