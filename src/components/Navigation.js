import React from "react";
import { NavLink } from 'react-router-dom';
import variables from '../styles/_settings.scss';
import '../styles/components/_navigation.scss';


const Navigation = () => {

    const handleMouseOver = () => {
        // console.log($colorUnderline);

        const navigation = document.querySelector('.navigation')
        console.log(navigation);
        navigation.style.color = "green";
        console.log(navigation.style);
        // variables.color1 = "green";
    };


    const NavItem = (props) => {
        return <li
            style={{ color: props.color }}
            onMouseOver={handleMouseOver}
        >{props.title}</li >;
    };

    return (
        <div className="navigation" id="repere">
            <ul>
                <NavLink to="/news">
                    <NavItem color={variables.newsColor} title="NEWS" />
                </NavLink>
                <NavLink to="/artists">
                    <NavItem color={variables.artistsColor} title="ARTISTS" />
                </NavLink>
                <NavLink to="/project">
                    <NavItem color={variables.projectColor} title="PROJECT" />
                </NavLink>
                <NavLink to="/login">
                    <NavItem color={variables.loginColor} title="LOGIN" />
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;