import React from "react";

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    return (
            <nav>
                <ul>
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