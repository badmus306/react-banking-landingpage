import React from 'react'
import styled from 'styled-components';
import logo from '../img/logo1.png';

function Navigation() {
    return (
        <NavigationStyled>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul className="nav-items">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#" > Inquiry </a>
                </li>
                <li>
                    <a href="#">Our Activity</a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
                </li>
                <div className="primary-btn">GET STARTED</div>
            </ul>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-items{
        display: flex;
        align-items: center;
        li{
            margin: 0 1rem;
        }
        .primary-btn{
            margin-left: 3rem;
            background-color:#E07488;
            padding: .6rem 1.3rem;
            border-radius: 70px;
            cursor: pointer;
            transition: all .4s ease-in-out;
            &:hover{
                background-color:rgba(57, 95, 246, 1);
            }
        }
    }
    .logo{
        img{
            width: 60px;

        }
    }
`;

export default Navigation;
