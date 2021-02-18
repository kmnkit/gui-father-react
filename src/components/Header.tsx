import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = styled.header`
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: rgba(255, 81, 0, 1);
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

const ListItem = styled.li<{ current: boolean }>`
    width: 100%;
    height: 50px;
    text-align: center;
    font-size: 30px;
    border-bottom: 3px solid
    ${(props) => (props.current ? '#F4D03F' : 'transparent')};
    transition: border-bottom 0.5s ease-in-out;
`;

const StyledLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Header: React.FunctionComponent = () => {
    const { pathname } = useLocation();
    return (
        <Navigation>
            <List>
                <ListItem current={pathname==='/'}>
                    <StyledLink to='/'>首页</StyledLink>
                </ListItem>
                <ListItem current={pathname==='/blanket'}>
                    <StyledLink to='/blanket'>被子/价格</StyledLink>
                </ListItem>
                <ListItem current={pathname==='/contact'}>
                    <StyledLink to='/contact'>联系方式</StyledLink>
                </ListItem>
            </List>
        </Navigation>
    )
}

export default Header;