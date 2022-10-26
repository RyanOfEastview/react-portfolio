import React from "react";
import Nav from "../Nav";
function Header(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    return (
        <header className="px-1">
            <h1 onClick={() => {
                setCurrentCategory(categories[0]);
            }}>
                Hiu Sum Jaime Yue
            </h1>
            <Nav>
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
            </Nav>
        </header >
    );
}

export default Header;