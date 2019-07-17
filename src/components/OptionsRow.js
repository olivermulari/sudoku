import React from 'react';
import ButtonTile from './ButtonTile';

class OptionsRow extends React.Component {
    constructor(props) {
        super(props);
        this.style = {
            margin: '15px auto 0 auto',
            backgroundColor: 'rgb(255, 255, 255)',
            width: `${this.props.tileSize * 9 + 2}px`,
            height: `${this.props.tileSize + 2}px`,
            border: '1px white solid'
        }
    }

    setValue = (value, selected) => {
        this.props.setValue(value, selected)
    }

    figureTileColor = (val) => {
        const selectedIsNull = this.props.selectedValue === 0
        const isNote = this.props.selectedNotes.includes(val);
        return isNote && selectedIsNull ? 'rgb(22, 237, 245)' : '';
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
                    selectedValue={this.props.selectedValue}
                    color={{backgroundColor: this.figureTileColor(id)}}
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