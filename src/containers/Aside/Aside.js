import React from 'react';
import './Aside.css'

const Aside = () => {
    return (
        <aside className="aside-menu">
            <ul>
                <li><a href="#products">Tous les produits</a></li>
                <li><a>Hommes</a></li>
                <li><a>Femmes</a></li>
                <li><a>Enfants</a></li>
                <li><a>Accessoires</a></li>
                <li><a>Capsules</a></li>
            </ul>
        </aside>
    );
}

export default Aside;