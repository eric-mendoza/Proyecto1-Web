import React, { Component } from "react";
import loadable from "react-loadable";
const LoadApp = loadable({
    loader: () => import("./App.jsx"),
    loading () {
        return <div>Loading...</div>;
    },
    timeout: 10000 // 10 seconds
});
export default class LoadableApp extends Component {
    render () {
        return <LoadApp/>;
    }
}
