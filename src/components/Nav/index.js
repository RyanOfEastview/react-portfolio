//This Nav component not only include the navigation but also starts with the Header component.
import React from "react";

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    return (
        <nav>
            <ul className="">
                {categories.map((category) => (
                    <li className={`mx-1 ${currentCategory === category && 'navActive'}`} key={category}
                    >
                        <span
                            onClick={() => {
                                setCurrentCategory(category);
                            }}
                        >
                            {category}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;