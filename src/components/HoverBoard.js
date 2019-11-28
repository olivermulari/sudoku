import React from 'react';
import './Board.css';

// The board on to of the board

class HoverBoard extends React.Component {

    figureActiveBox = () => {
      const row = Math.floor((this.props.selected[0] - 1) / 3)
      const col = Math.floor((this.props.selected[1] - 1) / 3)
      return col + 3 * row
    }
  
    render() {
        const classHB = (x) => x === this.figureActiveBox() ? "hb-chunck" : ""
        return (
            <div className="hoverboard">
              {
                [0, 1, 2, 3, 4, 5, 6, 7, 8].map(x => {
                    return (
                      <div key={x} className={classHB(x)}></div>
                    )
                })
              }
            </div>
        )
    }
}

export default HoverBoard;