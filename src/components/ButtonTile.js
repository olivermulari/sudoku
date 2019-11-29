import React from 'react';
import './ButtonTile.css';
import './Tile.css';

class ButtonTile extends React.Component {
    constructor(props) {
        super(props);
        this.value = this.props.value;
        this.pStyle = {
            cursor: 'pointer',
            margin: 0,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }
        this.state = {
            hover: false,
            style: {
                width: `${30}px`,
                height: `${30}px`,
                borderRadius: '3px'
            }
        }
    }

    toggleHover = () => {
        this.setState({hover: !this.state.hover})
    }

    renderHover = () => {
        let linkStyle = this.props.color;
        if (this.state.hover) {
          linkStyle = {backgroundColor: 'white', color: 'black'}
        }
        return linkStyle
    }

    button = () => (
        <div
        onClick={this.setValue}
        className="tile-button"
        style={Object.assign({}, this.state.style, this.renderHover())}
        onMouseOver={this.toggleHover} 
        onMouseOut={this.toggleHover}>
            <p className="noselect" style={this.pStyle}>{this.value}</p>
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