import React, { Component } from "react";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Select.css";

class Select extends Component {
    state = {
        current: "Select Here",
        items: ["Select One", "Select Two", "Select Three"],
        exposure: ""
    };

    handleSelect = () => {
        this.setState({
            exposure: "exposure"
        });
    };

    handleItemSelect = e => {
        const text = e.target.innerText;

        this.setState({
            current: text,
            exposure: ""
        });
    };
    render() {
        const { current, items, exposure } = this.state;
        return (
            <span className="select">
                <button onClick={this.handleSelect}>{current}</button>
                <ul className={exposure}>
                    {items.map((item, idx) => (
                        <li key={idx} onClick={this.handleItemSelect}>
                            {item}
                        </li>
                    ))}
                </ul>
            </span>
        );
    }
}

export default Select;
