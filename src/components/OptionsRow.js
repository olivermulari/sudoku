import React from 'react';
import ButtonTile from './ButtonTile';

class OptionsRow extends React.Component {
    constructor(props) {
        super(props);
        this.style = {
            margin: 'auto',
            backgroundColor: 'rgb(200, 0, 0)',
            width: `${this.props.tileSize * 9}px`,
            height: `${this.props.tileSize}px`
        }
    }

    setValue = (value, selected) => {
        this.props.setValue(value, selected)
    }

    render() {
        let id = 0;
        return (
            <div style={this.style}>{
                this.props.tiles.map((num) => {
                    if (id === 9) id = 0;
                    id++;
                    return (
                    <ButtonTile
                    id={[this.props.id, id]}
                    key={[this.props.id, id]}
                    selected={this.props.selected}
                    value={num}
                    setValue={this.setValue}
                    size={this.props.tileSize}/>
                )})
            }
            </div>
        )
    }
}

export default OptionsRow;