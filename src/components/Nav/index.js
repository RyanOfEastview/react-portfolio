import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    return (
        <header className="px-1">
            <h1>
                <a data-testid="link" href="/" >
                    Hiu Sum Jaime Yue
                </a>
            </h1>
            <nav>
                <ul className="">
                    {categories.map((category) => (
                        <li className={`mx-1 ${currentCategory.name === category.name && 'navActive'}`} key={category.name}
                        >
                            <span
                                onClick={() => {
                                    setCurrentCategory(category);
                                    setContactSelected(false);
                                }}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header >
    );
}

export default Nav;