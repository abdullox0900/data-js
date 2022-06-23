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

                <h2 className="class-name-blocks__title">Example</h2>
                <iframe className="class-name-blocks__iframe" src="https://carbon.now.sh/embed?bg=rgba%28251%2C251%2C251%2C1%29&t=seti&wt=none&l=htmlmixed&width=800&ds=false&dsyoff=20px&dsblur=68px&wc=false&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=173%25&si=false&es=2x&wm=false&code=%253Cheader%2520class%253D%2522header%2522%253E%253C%252Fheader%253E%250A%250A%253Cmain%2520class%253D%2522main%2522%253E%250A%2520%2520%2520%2520%253Caside%2520class%253D%2522aside%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%253Csection%2520class%253D%2522aside__section%2522%253E%253C%252Fsection%253E%250A%2520%2520%2520%2520%253C%252Faside%253E%250A%2520%2520%2520%2520%253Csection%2520class%253D%2522section%2522%253E%253C%252Fsection%253E%250A%253C%252Fmain%253E%250A%250A%253Cfooter%2520class%253D%2522footer%2522%253E%253C%252Ffooter%253E" style={{ width: 800, height: 300, border: 5, transform: 'scale(1)', }} sandbox="allow-scripts allow-same-origin">
                </iframe>




            </section>
        </>
    )
}

export default ClassNameBlocks;