import React from "react";

class Checkbox extends React.Component {
    state = {
        isChecked: false
    };

    handleChange = () => {
        this.setState({
            isChecked: !this.state.isChecked
        });
        this.props.handleCurrentSelects(
            this.props.label,
            !this.state.isChecked,
            this.props.id
        );
    };

    render() {
        const { label, id } = this.props;
        const { isChecked } = this.state;

        return (
            <span className="checkbox">
                <input
                    type="checkbox"
                    id={id}
                    checked={isChecked}
                    onChange={this.handleChange}
                />
                <label htmlFor={id}>{label}</label>
            </span>
        );
    }
}

export default Checkbox;
