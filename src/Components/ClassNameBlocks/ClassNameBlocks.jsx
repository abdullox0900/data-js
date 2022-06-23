// Import => React
import React from "react";

// Import => Style Component
import "../ClassNameBlocks/ClassNameBlocks.scss"

function ClassNameBlocks() {
    return (
        <>
            <section className="class-name-blocks">
                <h2 className="class-name-blocks__title">Blocks</h2>

                <ul className="class-name-blocks__list">
                    <li className="class-name-blocks__item">
                        <div className="class-name-blocks__col code-class">page</div>
                        <span className="line-span">—</span>
                        <p className="class-name-blocks__info">page root element</p>
                    </li>

                    <li className="class-name-blocks__item">
                        <div className="class-name-blocks__col code-class">header</div>
                        <span className="line-span">—</span>
                        <p className="class-name-blocks__info">header (of a page or element)</p>
                    </li>

                    <li className="class-name-blocks__item">
                        <div className="class-name-blocks__col code-class">footer</div>
                        <span className="line-span">—</span>
                        <p className="class-name-blocks__info">footer (of a page or element)</p>
                    </li>

                    <li className="class-name-blocks__item">
                        <div className="class-name-blocks__col code-class">section</div>
                        <span className="line-span">—</span>
                        <p className="class-name-blocks__info">content section (one of several)</p>
                    </li>

                    <li className="class-name-blocks__item">
                        <div className="class-name-blocks__col code-class">main</div>
                        <div className="class-name-blocks__col code-class">body</div>
                        <span className="line-span">—</span>
                        <p className="class-name-blocks__info">body (of a page or element)</p>
                    </li>

                    <li className="class-name-blocks__item">
                        <div className="class-name-blocks__col code-class">content</div>
                        <span className="line-span">—</span>
                        <p className="class-name-blocks__info">element content</p>
                    </li>

                    <li className="class-name-blocks__item">
                        <div className="class-name-blocks__col code-class">sidebar</div>
                        <span className="line-span">—</span>
                        <p className="class-name-blocks__info">side column (of a page or element)</p>
                    </li>

                    <li className="class-name-blocks__item">
                        <div className="class-name-blocks__col code-class">aside</div>
                        <span className="line-span">—</span>
                        <p className="class-name-blocks__info">block with additional information</p>
                    </li>

                    <li className="class-name-blocks__item">
                        <div className="class-name-blocks__col code-class">widget</div>
                        <span className="line-span">—</span>
                        <p className="class-name-blocks__info">widget, for example, in a sidebar</p>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default ClassNameBlocks;