import React from "react";
import { NavLink } from 'react-router-dom';
import variables from '../styles/_settings.scss';


const Navigation = () => {

    const handleMouseClick = (color) => {
        console.log(document.documentElement.style);
        document.documentElement.style.setProperty('--colorUnderline', color);
    };


    const NavItem = (props) => {
        return <li
            style={{ color: props.color }}
            onClick={handleMouseClick(props.color)}
        >{props.title}</li >;
    };

    return (
        <div className="navigation" id="repere">
            <ul>
                <NavLink to="/news" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    {/* <NavItem color={variables.newsColor} title="NEWS" /> */}
                    <li
                        style={{ color: variables.newsColor }}
                        onClick={handleMouseClick(variables.newsColor)}>
                        NEWS
                    </li >
                </NavLink>
                <NavLink to="/artists" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <NavItem color={variables.artistsColor} title="ARTISTS" />
                </NavLink>
                <NavLink to="/project" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <NavItem color={variables.projectColor} title="PROJECT" />
                </NavLink>
                <NavLink to="/login" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <NavItem color={variables.loginColor} title="LOGIN" />
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;