import React, { Component } from "react";
import Checkbox from "./Checkbox";
import "./Checkboxs.css";

class Checkboxs extends Component {
    state = {
        currentSelects: [],
        items: ["Checkbox One", "Checkbox Two", "Checkbox Three"]
    };

    handleCurrentSelects = (label, value) => {
        let currentArray = this.state.currentSelects;

        value
            ? currentArray.push(label)
            : currentArray.splice(currentArray.indexOf(label), 1);

        this.setState({
            currentSelects: currentArray
        });
    };

    render() {
        const { currentSelects, items } = this.state;
        return (
            <div>
                {items.map((item, idx) => (
                    <Checkbox
                        label={item}
                        key={idx}
                        id={idx}
                        handleCurrentSelects={this.handleCurrentSelects}
                    />
                ))}
                <p className="current">
                    <strong>Current Select :</strong>
                    {currentSelects.toString()}
                </p>
            </div>
        );
    }
}

export default Checkboxs;
