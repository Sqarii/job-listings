import React, { useState, useEffect } from "react";
import "./Card.css";
// import Photosnap from "./imgs/photosnap.svg";

const Card = (props) => {
    const image = require(`./images/${props.logo}`);
    // console.log(props.logo);

    const [language, setLanguage] = useState(props.languages);
    const [tools, setTools] = useState(props.tools);
    // console.log(language);

    const cardFilters = {
        role: props.role,
        level: props.level,
        languages: [props.languages],
        tools: [props.tools],
    };

    const getFilter = (filter) => {
        props.addFilter(filter);
    };

    return (
        <section
            className="card-cont"
            data-role=""
            data-level=""
            data-languages=""
            data-tools=""
        >
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
                    <button
                        onClick={() => {
                            getFilter(props.role);
                        }}
                        className="card-tag"
                    >
                        {props.role}
                    </button>
                    <button
                        onClick={() => {
                            getFilter(props.level);
                        }}
                        className="card-tag"
                    >
                        {props.level}
                    </button>

                    {language.map((n, id) => (
                        <button
                            key={id}
                            className="card-tag"
                            onClick={() => {
                                getFilter(n);
                            }}
                        >
                            {n}
                        </button>
                    ))}
                    {tools.map((n, id) => (
                        <button
                            key={id}
                            className="card-tag"
                            onClick={() => {
                                getFilter(n);
                            }}
                        >
                            {n}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Card;
