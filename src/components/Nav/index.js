// import React from "react";

// function Nav(props) {
//     const {
//         categories = [],
//         setCurrentCategory,
//         currentCategory
//     } = props;

//     return (
//             <nav>
//                 <ul>
//                     {categories.map((category) => (
//                         <li className={`mx-1 ${currentCategory === category && 'navActive'}`} key={category}
//                         >
//                             <span
//                                 onClick={() => {
//                                     setCurrentCategory(category);
//                                 }}
//                             >
//                                 {category}
//                             </span>
//                         </li>
//                     ))}
//                 </ul>
//             </nav>
//     );
// }

// export default Nav;

//This Nav component not only include the navigation but also starts with the Header component.
import React from "react";

function Nav(props) {
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
        </header >
    );
}

export default Nav;