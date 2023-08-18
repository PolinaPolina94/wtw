import React from "react";
import ReactDOM from 'react-dom';
import MainPage from "./components/main-page/Main-Page";
import {data} from "./components/mock-data";

ReactDOM.render(
    <MainPage data={data}/>,
    document.getElementById(`root`)
);
