import React from 'react';
import './Tile.css';
import './Note.css';

class Note extends React.Component {
  constructor(props) {
    super(props)
    this.values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  render() {
    return (
      <div className="note">
        {this.values.map((val) => {
          if (this.props.notes.includes(val)) {
            return <p className="noselect">{val}</p>
          } else {
            return <p></p>
          }
        })}
      </div>
    )
  }
}

export default Note;