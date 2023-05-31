import React, { useState } from "react";
import "./Card.css";
// import Photosnap from "./imgs/photosnap.svg";

const Card = (props) => {
    const image = require(`./images/${props.logo}`);
    // console.log(props.logo);

    const [language, setLanguage] = useState(props.languages);
    const [tools, setTools] = useState(props.tools);
    // console.log(language);

    return (
        <section className="card-cont">
            <img className="card-logo" src={image} alt="logo" />
            <div className="card">
                <div className="card-first-line">
                    <h1 className="card-company">{props.company}</h1>
                    {props.new && (
                        <button disabled className="card-new">
                            NEW!
                        </button>
                    )}
                    {props.featured && (
                        <button disabled className="card-featured">
                            FEATURED
                        </button>
                    )}
                </div>
                <h2 className="card-position">{props.position}</h2>
                <div className="card-info">
                    <span className="postedAt">{props.postedAt}</span>
                    <span className="contract">{props.contract}</span>
                    <span className="location">{props.location}</span>
                </div>
                <hr />
                <div className="card-tags">
                    <button className="card-tag">{props.role}</button>
                    <button className="card-tag">{props.level}</button>

                    {language.map((n, id) => (
                        <button key={id} className="card-tag">
                            {n}
                        </button>
                    ))}
                    {tools.map((n, id) => (
                        <button key={id} className="card-tag">
                            {n}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Card;
