(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(t,e,r){},,function(t,e,r){},,function(t,e,r){t.exports=r(19)},,,,,,function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),i=r(9),o=r.n(i),s=(r(16),r(1)),c=r(2),l=r(4),u=r(3),f=r(5),h=(r(6),function(t){function e(t){var r;return Object(s.a)(this,e),(r=Object(l.a)(this,Object(u.a)(e).call(this,t))).startEasyGame=function(){r.props.startGame("easy")},r.startMediumGame=function(){r.props.startGame("medium")},r.startHardGame=function(){r.props.startGame("hard")},r.startExtremeGame=function(){r.props.startGame("extreme")},r.difficulty={easy:"easy",medium:"medium",hard:"hard",extreme:"extreme"},r}return Object(f.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{id:"game-select",className:"noselect"},a.a.createElement("button",{onClick:this.startEasyGame},"Easy"),a.a.createElement("button",{onClick:this.startMediumGame},"Medium"),a.a.createElement("button",{onClick:this.startHardGame},"Hard"),a.a.createElement("button",{onClick:this.startExtremeGame},"Extreme"))}}]),e}(a.a.Component));function d(t){return 81===t.flat().filter(function(t){return 0!==t}).length}function p(t){var e=t.every(function(t){return m(t)}),r=function(t){for(var e=[],r=1;r<=9;r++)e.push(g(t,r));return e}(t).every(function(t){return m(t)}),n=function(t){for(var e=[],r=1;r<=9;r+=3)for(var n=1;n<=9;n+=3)e.push(y(t,r,n));return e}(t).every(function(t){return m(t)});return e&&r&&n}function v(t,e){return 1===t.filter(function(t){return t===e}).length}function m(t){var e=t.filter(function(t){return 0!==t});return Array.from(new Set(e)).length===e.length}function g(t,e){return t.map(function(t){return t[e-1]})}function y(t,e,r){for(var n=[],a=0;a<3;a++)for(var i=0;i<3;i++){var o=e-1-(e-1)%3+a,s=r-1-(r-1)%3+i;n.push(t[o][s])}return n}function b(t,e,r){var n=Array.from(t[e-1]);n.splice(r-1,1);var a=g(t,r);a.splice(e-1,1);var i=y(t,e,r),o=(e-1)%3*3+(r-1)%3;i.splice(o,1);return[1,2,3,4,5,6,7,8,9].filter(function(t){return function(t){return Array.from(new Set(n.concat(a).concat(i))).every(function(e){return e!==t})}(t)})}function k(t,e){for(var r=Math.floor(e/2),n=0;n<r;n++)C(t);for(var a=0;a<e-r;a++)j(t)}function O(t,e){if(e>0&&e<9){for(var r=1;r<=9;r++)S(t,r);O(t,e-1)}else console.log("tried to remove too many values")}function S(t,e){var r=t[e-1].filter(function(t){return 0!==t});if(r.length>0){var n=Math.floor(Math.random()*r.length),a=t[e-1].indexOf(r[n]);t[e-1][a]=0}}function C(t){var e=Math.floor(9*Math.random()+1);E(t,Math.floor(9*Math.random()+1),e)}function j(t){for(var e=Array(9).fill(Array(9).fill(0)),r=1;r<=9;r++)for(var n=1;n<=9;n++)0!==t[r-1][n-1]&&(e[r-1][n-1]=[r,n,b(t,r,n)]);var a=e.flat().filter(function(t){return 0!==t}).sort(function(t,e){return t[2].length-e[2].length});if(a[0]){var i=a.filter(function(t){return t[2].length===a[0][2].length}),o=i[Math.floor(Math.random()*i.length)];E(t,o[0],o[1])}}function E(t,e,r){t[e-1][r-1]=0}function w(){return function t(e,r){var n=[];var a=[];for(var i=1;i<=e;++i)n.push(i),a.push(new Array(e));var o=3,s=9===e?3:2;function c(t,e){var r,n=e.length-1,a=e[n],i=n%s,c=[];var l=[];if(i>0)for(var u=i;u>0;--u){var f=Math.floor(e[n-u].indexOf(t)/o);l.push(f)}return void 0===(r=function(r){function n(t){var e=Math.floor(t/o);return!(r.indexOf(e)>=0)}for(var i=0,s=a.length;i<s;++i){for(var l=!0,u=e.length-1;u>=0;--u)e[u][i]===t&&(l=!1);void 0===a[i]&&l&&n(i)&&c.push(i)}return c[(f=c.length,Math.floor(Math.random()*f))];var f}(l))?t:(a[r]=t,!0)}for(var l=n.length-1;l>=0;--l){for(var u=[];a.length>0;)if(u.push(a.shift()),!0!==c(n[l],u))return t(e,r+1);a=u}console.log("Sudoku created in "+r+" iterations");return a}(9,0)}r(8);var x=function(t){function e(t){var r;return Object(s.a)(this,e),console.log("tile constructed"),(r=Object(l.a)(this,Object(u.a)(e).call(this,t))).toggleHover=function(){r.setState({hover:!r.state.hover})},r.toggleActive=function(){r.setState({active:!r.state.active})},r.toggleFocus=function(){r.setState({focus:!r.state.focus})},r.renderHover=function(){if(r.state.isStatic)return{};var t={backgroundColor:r.props.style.backgroundColor};return r.state.hover?t={backgroundColor:"rgb(22, 237, 245)"}:r.state.active?t={backgroundColor:"rgb(22, 237, 245)"}:r.state.focus&&(t={backgroundColor:"rgb(22, 237, 245)"}),t},r.displayOptions=function(){r.state.isStatic||r.props.onDisplayOptions(r.props.id,r.props.isSelected)},r.row=r.props.id[0],r.col=r.props.id[1],r.state={isStatic:r.props.static[r.row-1][r.col-1],hover:!1,active:!1,focus:!1,pStyle:{cursor:r.props.static[r.row-1][r.col-1]?"default":"pointer",margin:0,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},r}return Object(f.a)(e,t),Object(c.a)(e,[{key:"confiqClassName",value:function(){return this.state.isStatic||0===this.props.value?"tile":"tile "+this.props.class}},{key:"render",value:function(){return 1===this.row&&1===this.col&&console.log("tile render"),a.a.createElement("div",{className:this.confiqClassName(),onClick:this.displayOptions,style:Object.assign({},this.props.style,this.renderHover()),onMouseOver:this.toggleHover,onMouseOut:this.toggleHover,onMouseUp:this.toggleActive,onMouseDown:this.toggleActive,onFocus:this.toggleFocus},a.a.createElement("p",{className:"noselect",style:this.state.pStyle},0===this.props.value?"":this.props.value))}}]),e}(a.a.Component),M=(r(17),function(t){function e(t){var r;return Object(s.a)(this,e),(r=Object(l.a)(this,Object(u.a)(e).call(this,t))).toggleHover=function(){r.setState({hover:!r.state.hover})},r.renderHover=function(){var t={backgroundColor:r.style.backgroundColor};return r.state.hover&&(t={backgroundColor:"white",color:"black"}),t},r.button=function(){return a.a.createElement("div",{onClick:r.setValue,className:"tile-button",style:Object.assign({},r.style,r.renderHover()),onMouseOver:r.toggleHover,onMouseOut:r.toggleHover,onMouseUp:r.toggleHover,onMouseDown:r.toggleHover,onFocus:r.toggleHover},a.a.createElement("p",{className:"noselect",style:r.pStyle},r.value))},r.setValue=function(){r.props.setValue(r.value,r.props.selected)},r.value=r.props.value,r.style={width:"".concat(r.props.size,"px"),height:"".concat(r.props.size,"px"),borderRadius:"3px"},r.pStyle={cursor:"pointer",margin:0,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},r.state={hover:!1},r}return Object(f.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return this.button()}}]),e}(a.a.Component)),H=function(t){function e(t){var r;return Object(s.a)(this,e),(r=Object(l.a)(this,Object(u.a)(e).call(this,t))).setValue=function(t,e){r.props.setValue(t,e)},r.style={margin:"15px auto 0 auto",backgroundColor:"rgb(255, 255, 255)",width:"".concat(9*r.props.tileSize+2,"px"),height:"".concat(r.props.tileSize+2,"px"),border:"1px white solid"},r}return Object(f.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this,e=0;return a.a.createElement("div",{style:this.style},this.props.tiles.map(function(r){return 9===e&&(e=0),e++,a.a.createElement(M,{id:[t.props.id,e],key:[t.props.id,e],selected:t.props.selected,value:r,setValue:t.setValue,size:t.props.tileSize})}))}}]),e}(a.a.Component),G=(r(18),function(t){function e(t){var r;return Object(s.a)(this,e),console.log("Board constructed!"),(r=Object(l.a)(this,Object(u.a)(e).call(this,t))).mapStaticBoard=function(t){return t.map(function(t){return t.map(function(t){return 0!==t})})},r.displayOptions=function(t,e){r.setState({showOptions:!e,selected:t},function(){e&&r.setValue(0,t)})},r.setValue=function(t,e){if(!r.isSelected(0,0)){var n=r.state.tiles;n[e[0]-1][e[1]-1]=t,r.setState({showOptions:!1,selected:[0,0],tiles:n},function(){r.check(e)})}},r.board=function(t){console.log("Started ".concat(t," game"));var e=w();switch(O(e,2),t){case"easy":break;case"medium":O(e,1),k(e,10);break;case"hard":k(e,35);break;case"extreme":k(e,50)}return e}(r.props.difficulty),r.static=r.mapStaticBoard(r.board),r.state={tiles:r.board,selected:[0,0],incorrectTiles:[],showOptions:!1,size:30},r.init(),r}return Object(f.a)(e,t),Object(c.a)(e,[{key:"init",value:function(){this.props.setGameState(p(this.state.tiles),d(this.state.tiles))}},{key:"check",value:function(){var t=this.checkAllTiles(),e=d(this.state.tiles);this.props.setGameState(t,e)}},{key:"checkAllTiles",value:function(){for(var t=!0,e=1;e<=9;e++)for(var r=1;r<=9;r++)if(!this.static[e-1][r-1]&&0!==this.state.tiles[e-1][r-1]){var n=this.checkTile([e,r]);n||(t=n)}return t}},{key:"checkTile",value:function(t){var e=function(t,e,r){var n=t[e-1][r-1],a=v(t[e-1],n),i=v(g(t,r),n),o=v(y(t,e,r),n);return a&&i&&o}(this.state.tiles,t[0],t[1]);return this.updateIncorrectTiles(t,!e),e}},{key:"updateIncorrectTiles",value:function(t,e){var r=this.incorrectIndex(t[0],t[1]);e?-1===r&&this.state.incorrectTiles.push(t):-1!==r&&this.state.incorrectTiles.splice(r,1)}},{key:"incorrectIndex",value:function(t,e){return this.state.incorrectTiles.findIndex(function(r){return r[0]===t&&r[1]===e})}},{key:"isSelected",value:function(t,e){return this.state.selected[0]===t&&this.state.selected[1]===e}},{key:"confiqColor",value:function(t,e){var r=this;return r.static[t-1][e-1]?"rgb(230, 230, 230)":r.isSelected(t,e)?"rgb(22, 237, 245)":""}},{key:"confiqHelperClass",value:function(t,e){return this.props.tileCheck?-1===this.incorrectIndex(t,e)?"correct-tile":"incorrect-tile":""}},{key:"confiqBorders",value:function(t,e){var r=e%3===0?"black":"#ccc",n=t%3===0?"black":"#ccc",a=e%3===1?"black":"#ccc";return{borderWidth:"1px",borderStyle:"solid",borderColor:"".concat(t%3===1?"black":"#ccc"," ").concat(r," ").concat(n," ").concat(a)}}},{key:"getTileStyle",value:function(t,e){var r={backgroundColor:this.confiqColor(t,e),cursor:this.static[t-1][e-1]?"default":"pointer",width:"".concat(this.state.size,"px"),height:"".concat(this.state.size,"px")};return Object.assign(r,this.confiqBorders(t,e))}},{key:"render",value:function(){var t=this;console.log("board render");var e=1,r=0,n=a.a.createElement("div",{id:"board",style:this.style},this.state.tiles.flat().map(function(n){return 9===r&&(r=0,e++),r++,a.a.createElement(x,{id:[e,r],key:[e,r],class:t.confiqHelperClass(e,r),style:t.getTileStyle(e,r),static:t.static,isSelected:t.isSelected(e,r),onDisplayOptions:t.displayOptions,value:n,tileSize:t.state.size})})),i=a.a.createElement("div",null,a.a.createElement(H,{id:10,key:10,setValue:this.setValue,selected:this.state.selected,tiles:[1,2,3,4,5,6,7,8,9],tileSize:this.state.size}));return this.state.showOptions?a.a.createElement("div",null,n,i):n}}]),e}(a.a.Component)),T=function(t){function e(t){var r;return Object(s.a)(this,e),(r=Object(l.a)(this,Object(u.a)(e).call(this,t))).setGameState=function(t,e){r.setState({isCorrect:t,isFilled:e},function(){r.setState({isCompleted:r.state.isCorrect&&r.state.isFilled})})},r.gameStyle=function(){return r.state.isFilled?r.state.isCompleted?{background:"green"}:{background:"red"}:void 0},r.state={isCorrect:!0,isFilled:!1,isCompleted:!1,difficulty:r.props.difficulty},r.headerStyle={color:"white",padding:"30px 0 0 0",textAlign:"center"},r}return Object(f.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"sudoku-game",style:this.gameStyle()},a.a.createElement("h1",{style:this.headerStyle},this.state.isFilled?this.state.isCompleted?"Completed!":"Try again!":"Sudoku"),a.a.createElement(G,{tileCheck:this.props.tileCheck,difficulty:this.props.difficulty,setGameState:this.setGameState}))}}]),e}(a.a.Component),z=function(t){function e(t){var r;return Object(s.a)(this,e),(r=Object(l.a)(this,Object(u.a)(e).call(this,t))).startGame=function(t){r.setState({gameStarted:!0,difficulty:t})},r.toggleTileCheck=function(){var t=r.state.tileCheck;r.setState({tileCheck:!t})},r.state={tileCheck:!1,gameStarted:!1,difficulty:"init"},r}return Object(f.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return this.state.gameStarted?a.a.createElement("div",{id:"app"},a.a.createElement("div",{id:"settings"},"Tile Helper: ",a.a.createElement("input",{type:"checkbox",id:"myCheck",onClick:this.toggleTileCheck})),a.a.createElement(T,{tileCheck:this.state.tileCheck,difficulty:this.state.difficulty})):a.a.createElement("div",{id:"app"},a.a.createElement(h,{startGame:this.startGame}))}}]),e}(a.a.Component);o.a.render(a.a.createElement(z,null),document.getElementById("root")),function(){var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(t,"px")),window.addEventListener("resize",function(){var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(t,"px"))})}()}],[[10,1,2]]]);
//# sourceMappingURL=main.e141b788.chunk.js.map