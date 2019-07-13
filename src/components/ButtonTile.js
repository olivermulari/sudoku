import React from 'react';
import './ButtonTile.css';

class ButtonTile extends React.Component {
    constructor(props) {
        super(props);
        this.value = this.props.value;
        this.style = {
            width: `${this.props.size - 2}px`,
            height: `${this.props.size - 2}px`
        }
        this.pStyle = {
            cursor: 'pointer',
            margin: 0,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }
    }

    button = () => (
        <div
        onClick={this.setValue}
        className="tile-button" 
        style={this.style}>
            <p style={this.pStyle}>{this.value}</p>
        </div>
    );

    setValue = () => {
        this.props.setValue(this.value, this.props.selected)
    }

    render() {
        return this.button()
    }
}

export default ButtonTile;