import React, {useEffect, useState} from "react";

import "../stylesheets/App.css";

export default function App(): JSX.Element {
    const [temp, setTemp] = useState(10);

    function incrementTemp(): void {
        setTemp(temp + 1);
    }

    function decrementTemp(): void {
        setTemp(temp - 1);
    }

    useEffect(() => {
        const clock: HTMLDivElement = document.getElementById("temp-clock") as HTMLDivElement;

        const ice: string = "#71a6d2";
        const normal: string = "#035aa7";
        const warm: string = "orange";
        const hot: string = "red";

        if(temp < 10) {
            clock.style.backgroundColor = ice;
        } else if(temp < 20) {
            clock.style.backgroundColor = normal;
        } else if(temp < 30) {
            clock.style.backgroundColor = warm;
        } else {
            clock.style.backgroundColor = hot;
        }
    }, [temp]);

    return (
        <>
            <div id={"container"}>
                <div id={"temp-clock"}>
                    <h1 id={"temperature"}>{temp}°C</h1>
                </div>
                <div id={"buttons-container"}>
                    <button className={"button"} onClick={decrementTemp}>-</button>
                    <button className={"button"} id={"button2"} onClick={incrementTemp}>+</button>
                </div>
            </div>
        </>
    );
};