import React from "react";
import Card from "./Card";
import "./App.css";
import data from "./data.json";

const App = () => {
    const banner = require("./images/bg-header-mobile.svg").default;

    return (
        <>
            <header className="header">
                <img src={banner} alt="banner" />
            </header>
            {data.map((data) => (
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
                />
            ))}
        </>
    );
};

export default App;
