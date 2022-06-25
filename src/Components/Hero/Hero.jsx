// Import => React
import React from "react";
import { NavLink } from "react-router-dom";

// Import => Style Component
import "../Hero/Hero.scss";

// Import => Component
import Animation from "../Animation/Animation";
import Container from "../Container/Container";


function Hero() {
    return (
        <>
            <Container>
                <section className="hero">
                    <div className="hero__box">
                        <h1 className="hero__title">Data Js</h1>
                        <p className="hero__desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quos sed voluptas nobis distinctio cupiditate necessitatibus
                            obcaecati porro doloremque neque provident.
                        </p>
                        <NavLink to={"/menu"}>
                            <button className="hero__btn-menu">Menu</button>
                        </NavLink>

                    </div>
                    <Animation />
                </section>
            </Container>
        </>
    )
}

export default Hero;