import React, { useState } from 'react'

import AsideFilter from './AsideFilter/AsideFilter'
import './Filters.css'

const Filters = () => {
    const [filterOpen, setFilterOpen] = useState(false);

    const filterToggleHandler = () => {
        setFilterOpen(!filterOpen);
    }

    let content;
    if(filterOpen) {
        content = <AsideFilter show={filterOpen} click={filterToggleHandler} />
    }else {
        content = <div className="filter-button" onClick={filterToggleHandler} >Filtrer</div>
    }

    return (
        <div className="category__filters">
            { content }
            <div>
                Trier par nouveauté
            </div>
        </div>
    );
}

export default Filters;