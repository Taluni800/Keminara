import { useState } from 'react';
import './Topbar.css';

function Topbar() {
    const [showFilter, setFilter] = useState(false);
    const [showSearch, setSearch] = useState(false);

    return(
        <header className="topbar">
            {/* filter button */}
            <div className="topbar-left">
                <button className="filter-btn" onClick={() => setFilter((prev) => !prev)}>
                    ☰ Filter
                </button>
                {showFilter && (
                    <div className="filter-dropdown">
                        <ul>
                            <li>By date</li>
                            <li>By alphabet</li>
                        </ul>
                    </div>   
                )}
            </div>

            {/* title */}
            <div className="topbar-center">
                <h1 className="topbar-title">Your Title</h1>
            </div>

            {/* search button */}
            <div className="topbar-right">
                {showSearch && (
                    <input type="text" className="search-input" placeholder='Search...' />
                )}

                <button className="search-btn" onClick={() => setSearch((prev) => !prev)}>
                    🔍
                </button>

            </div>
        </header>
    );
}

export default Topbar;