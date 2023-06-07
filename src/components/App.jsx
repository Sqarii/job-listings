import React, { useState, useEffect } from "react";
import ReactDom from "react-dom/client";
import Card from "./Card";
import "./App.css";
import data from "./data.json";

const App = () => {
    const banner = require("./images/bg-header-mobile.svg").default;
    const removeIcon = require("./images/icon-remove.svg").default;

    const [filter, setFilter] = useState([]);
    const [cardFilters, setCardFilters] = useState({});

    const addFilter = (f) => {
        setFilter((prev) => {
            prev = [...prev, f];
            const newArray = prev.filter((item, index) => {
                return prev.indexOf(item) === index;
            });
            return newArray;
        });

        // setFilter((prev) => {
        //     if (prev.indexOf(f) === -1) {
        //         console.log("item doesnt exist");
        //         return [...prev, f];
        //     } else {
        //         console.log("item already exists");
        //     }
        // });
    };

    const deleteCurrentFilter = (value) => {
        setFilter((prev) => {
            return prev.filter((e) => e !== value);
        });
    };

    const deleteAllFilters = () => {
        // console.log("filters clear");
        setFilter([]);
    };

    return (
        <>
            <header className="header">
                <img src={banner} alt="banner" />

                {filter.length > 0 && (
                    <section className="filter-cont">
                        <span className="filter-cont-btns">
                            {
                                /* filter buttons */

                                filter.map((e, i) => (
                                    <div className="filter-btn" key={i}>
                                        <span className="filter-text">{e}</span>
                                        <button
                                            onClick={() => {
                                                deleteCurrentFilter(e);
                                            }}
                                            className="filter-btn-btn"
                                        >
                                            <img
                                                src={removeIcon}
                                                alt="remove"
                                            />
                                        </button>
                                    </div>
                                ))
                            }
                        </span>
                        <button
                            onClick={() => {
                                deleteAllFilters();
                            }}
                            className="filter-clear"
                        >
                            Clear
                        </button>
                    </section>
                )}
            </header>

            {data.map((data) => {
                if (filter.length > 0) {
                    let cardData = Object.values(data).flat(1);
                    if (filter.every((r) => cardData.includes(r))) {
                        return (
                            <Card
                                key={data.id}
                                company={data.company}
                                logo={data.logo}
                                new={data.new}
                                featured={data.featured}
                                position={data.position}
                                role={data.role}
                                level={data.level}
                                postedAt={data.postedAt}
                                contract={data.contract}
                                location={data.location}
                                languages={data.languages}
                                tools={data.tools}
                                addFilter={addFilter}
                            />
                        );
                    }
                } else {
                    return (
                        <Card
                            key={data.id}
                            company={data.company}
                            logo={data.logo}
                            new={data.new}
                            featured={data.featured}
                            position={data.position}
                            role={data.role}
                            level={data.level}
                            postedAt={data.postedAt}
                            contract={data.contract}
                            location={data.location}
                            languages={data.languages}
                            tools={data.tools}
                            addFilter={addFilter}
                        />
                    );
                }
            })}
        </>
    );
};

export default App;
