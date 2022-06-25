// Import => React
import React from "react";

// Import => Style Component
import "../../Components/Animation/Animation.scss";

// Import => Img Component
import Js from "../../Assets/Img/javascript.png";
import Html from "../../Assets/Img/html.png";
import Css from "../../Assets/Img/css.png";
import Scss from "../../Assets/Img/SCSS.png";
import GitHub from "../../Assets/Img/Vector.png";
import TypeScript from "../../Assets/Img/Typescript.png";
import Bootstrap from "../../Assets/Img/bootstrap.png";
import ReactImg from "../../Assets/Img/React.png";


function Animation() {

    return (
        <>
            <div className="anim-hero">
                <div className="anim-hero__box-js" data-aos="zoom-in" data-aos-duration="1000"
                    data-aos-delay="50">
                    <img src={Js} alt="" width={150} height={150} />
                </div>
                <div className="anim-hero__box-html" data-aos="zoom-in" data-aos-duration="1500"
                    data-aos-delay="200">
                    <img src={Html} alt="" width={80} height={80} />
                </div>
                <div className="anim-hero__box-css" data-aos="zoom-in" data-aos-duration="1500"
                    data-aos-delay="350">
                    <img src={Css} alt="" width={80} height={80} />
                </div>
                <div className="anim-hero__box-scss" data-aos="zoom-in" data-aos-duration="1500"
                    data-aos-delay="400">
                    <img src={Scss} alt="" width={80} height={80} />
                </div>
                <div className="anim-hero__box-github" data-aos="zoom-in" data-aos-duration="1500"
                    data-aos-delay="500">
                    <img src={GitHub} alt="" width={70} height={70} />
                </div>
                <div className="anim-hero__box-typescript" data-aos="zoom-in" data-aos-duration="1500"
                    data-aos-delay="600">
                    <img src={TypeScript} alt="" width={70} height={70} />
                </div>
                <div className="anim-hero__box-bootstapt" data-aos="zoom-in" data-aos-duration="1500"
                    data-aos-delay="700">
                    <img src={Bootstrap} alt="" width={70} height={70} />
                </div>
                <div className="anim-hero__box-react" data-aos="zoom-in" data-aos-duration="1500"
                    data-aos-delay="800">
                    <img src={ReactImg} alt="" width={70} height={70} />
                </div>
            </div>
        </>
    )
}

export default Animation;