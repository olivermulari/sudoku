import React from 'react';
import './Board.css';

// The board on to of the board

class HoverBoard extends React.Component {
    constructor(props) {
        super(props)
        this.arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    }

    figureActiveRow = () => {
      return this.props.selected[0] - 1
    }

    figureActiveCol = () => {
      return this.props.selected[1] - 1
    }

    figureActiveBox = () => {
      const row = Math.floor((this.props.selected[0] - 1) / 3)
      const col = Math.floor((this.props.selected[1] - 1) / 3)
      return col + 3 * row
    }
  
    render() {
        const classCh = (x) => x === this.figureActiveBox() ? "hb hb-chunck" : ""
        const classRow = (x) => x === this.figureActiveRow() ? "hb hb-row" : ""
        const classCol = (x) => x === this.figureActiveCol() ? "hb hb-col" : ""

        return (
          <div>
            <div className="hoverboard hoverboard-row">
              {
                this.arr.map(x => {
                  return (
                    <div style={{position: "relative"}} key={x}>
                      <div className={classRow(x)}></div>
                    </div>
                  )
                })
              }
            </div>
            <div className="hoverboard hoverboard-col">
              {
                this.arr.map(x => {
                  return (
                    <div style={{position: "relative"}} key={x}>
                      <div className={classCol(x)}></div>
                    </div>
                  )
                })
              }
            </div>
            <div className="hoverboard hoverboard-box">
              {
                this.arr.map(x => {
                  return (
                    <div style={{position: "relative"}} key={x}>
                      <div className={classCh(x)}></div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        )
    }
}

export default HoverBoard;