import React from 'react';
import {Link} from "react-router-dom";
import {Routes} from "../consts/routes";

function TopBar() {
    return(
        <div>
            <nav>
                <li>
                    <Link to={Routes.HOME_ROUTE}/>
                </li>
            </nav>
        </div>
    );
}

export default TopBar;
