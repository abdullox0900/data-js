// Import => React
import React from "react";

// Import => Style Component
import "../../Components/ClassName/ClassName.scss";

// Import => Component
import Nav from "../Nav/Nav";
import ClassNameBlocks from "../ClassNameBlocks/ClassNameBlocks";

function ClassName() {
    return (
        <>
            <section className="router-dom-wrap">
                <Nav />
                <div className="class-name">
                    <h1 className="class-name__title">Words commonly used in CSS classes</h1>
                    <ul>
                        <li>D</li>
                    </ul>

                    <ClassNameBlocks />
                   
                </div>
            </section>
        </>
    )
}

export default ClassName;