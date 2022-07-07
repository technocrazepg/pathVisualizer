(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),i=n.n(s),a=n(8),o=n.n(a),r=(n(15),n(16),n(9)),l=n(2),c=n(3),u=n(5),d=n(4),h=n(1),f=n(6),m=(n(17),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.col,n=e.isFinish,s=e.isStart,a=e.isWall,o=e.onMouseDown,r=e.onMouseEnter,l=e.onMouseUp,c=e.row,u=n?"node-finish":s?"node-start":a?"node-wall":"";return i.a.createElement("td",{id:"node-".concat(c,"-").concat(t),className:"node ".concat(u),onMouseDown:function(){return o(c,t)},onMouseEnter:function(){return r(c,t)},onMouseUp:function(){return l()}})}}]),t}(s.Component));function v(e,t,n){var s=[];t.distance=0;for(var i=function(e){var t=[],n=!0,s=!1,i=void 0;try{for(var a,o=e[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var r=a.value,l=!0,c=!1,u=void 0;try{for(var d,h=r[Symbol.iterator]();!(l=(d=h.next()).done);l=!0){var f=d.value;t.push(f)}}catch(m){c=!0,u=m}finally{try{l||null==h.return||h.return()}finally{if(c)throw u}}}}catch(m){s=!0,i=m}finally{try{n||null==o.return||o.return()}finally{if(s)throw i}}return t}(e);i.length;){g(i);var a=i.shift();if(!a.isWall){if(a.distance===1/0)return s;if(a.isVisited=!0,s.push(a),a===n)return s;N(a,e)}}}function g(e){e.sort((function(e,t){return e.distance-t.distance}))}function N(e,t){var n=function(e,t){var n=[],s=e.col,i=e.row;i>0&&n.push(t[i-1][s]);i<t.length-1&&n.push(t[i+1][s]);s>0&&n.push(t[i][s-1]);s<t[0].length-1&&n.push(t[i][s+1]);return n.filter((function(e){return!e.isVisited}))}(e,t),s=!0,i=!1,a=void 0;try{for(var o,r=n[Symbol.iterator]();!(s=(o=r.next()).done);s=!0){var l=o.value;l.distance=e.distance+1,l.previousNode=e}}catch(c){i=!0,a=c}finally{try{s||null==r.return||r.return()}finally{if(i)throw a}}}var p=function(){return i.a.createElement("div",{className:"text-justify"},i.a.createElement("p",null,"Djikstra used this property in the opposite direction i.e we overestimate the distance of each vertex from the starting vertex. Then we visit each node and its neighbors to find the shortest subpath to those neighbors. The algorithm uses a greedy approach in the sense that we find the next best solution hoping that the end result is the best solution for the whole problem."))};var y=function(){return i.a.createElement("div",{className:"text-justify"},i.a.createElement("p",null,"Breadth-first search is a graph traversal algorithm that starts traversing the graph from the root node and explores all the neighboring nodes. Then, it selects the nearest node and explores all the unexplored nodes. While using BFS for traversal, any node in the graph can be considered as the root node.There are many ways to traverse the graph, but among them, BFS is the most commonly used approach. It is a recursive algorithm to search all the vertices of a tree or graph data structure. BFS puts every vertex of the graph into two categories - visited and non-visited. It selects a single node in a graph and, after that, visits all the nodes adjacent to the selected node."))};var S=function(){return i.a.createElement("div",{className:"text-justify"},i.a.createElement("p",null,"It is a recursive algorithm to search all the vertices of a tree data structure or a graph. The depth-first search (DFS) algorithm starts with the initial node of graph G and goes deeper until we find the goal node or the node with no children.Because of the recursive nature, stack data structure can be used to implement the DFS algorithm. The process of implementing the DFS is similar to the BFS algorithm."))};n(18);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}var b=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).getInitialGrid=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.state.ROW_COUNT,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.state.COLUMN_COUNT,s=[],i=0;i<t;i++){for(var a=[],o=0;o<n;o++)a.push(e.createNode(i,o));s.push(a)}return s},e.createNode=function(t,n){return{row:t,col:n,isStart:t===e.state.START_NODE_ROW&&n===e.state.START_NODE_COL,isFinish:t===e.state.FINISH_NODE_ROW&&n===e.state.FINISH_NODE_COL,distance:1/0,distanceToFinishNode:Math.abs(e.state.FINISH_NODE_ROW-t)+Math.abs(e.state.FINISH_NODE_COL-n),isVisited:!1,isWall:!1,previousNode:null,isNode:!0}},e.state={grid:[],START_NODE_ROW:5,FINISH_NODE_ROW:5,START_NODE_COL:5,FINISH_NODE_COL:15,mouseIsPressed:!1,ROW_COUNT:20,COLUMN_COUNT:30,isRunning:!1,isStartNode:!1,isFinishNode:!1,isWallNode:!1,currRow:0,currCol:0,algoInfo:""},e.handleMouseDown=e.handleMouseDown.bind(Object(h.a)(e)),e.handleMouseLeave=e.handleMouseLeave.bind(Object(h.a)(e)),e.toggleIsRunning=e.toggleIsRunning.bind(Object(h.a)(e)),e}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.getInitialGrid();this.setState({grid:e})}},{key:"toggleIsRunning",value:function(){this.setState({isRunning:!this.state.isRunning})}},{key:"handleMouseDown",value:function(e,t){if(!this.state.isRunning)if(this.isGridClear())if("node node-start"===document.getElementById("node-".concat(e,"-").concat(t)).className)this.setState({mouseIsPressed:!0,isStartNode:!0,currRow:e,currCol:t});else if("node node-finish"===document.getElementById("node-".concat(e,"-").concat(t)).className)this.setState({mouseIsPressed:!0,isFinishNode:!0,currRow:e,currCol:t});else{var n=w(this.state.grid,e,t);this.setState({grid:n,mouseIsPressed:!0,isWallNode:!0,currRow:e,currCol:t})}else this.clearGrid()}},{key:"isGridClear",value:function(){var e=!0,t=!1,n=void 0;try{for(var s,i=this.state.grid[Symbol.iterator]();!(e=(s=i.next()).done);e=!0){var a=s.value,o=!0,r=!1,l=void 0;try{for(var c,u=a[Symbol.iterator]();!(o=(c=u.next()).done);o=!0){var d=c.value,h=document.getElementById("node-".concat(d.row,"-").concat(d.col)).className;if("node node-visited"===h||"node node-shortest-path"===h)return!1}}catch(f){r=!0,l=f}finally{try{o||null==u.return||u.return()}finally{if(r)throw l}}}}catch(f){t=!0,n=f}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}return!0}},{key:"handleMouseEnter",value:function(e,t){if(!this.state.isRunning&&this.state.mouseIsPressed){var n=document.getElementById("node-".concat(e,"-").concat(t)).className;if(this.state.isStartNode){if("node node-wall"!==n)this.state.grid[this.state.currRow][this.state.currCol].isStart=!1,document.getElementById("node-".concat(this.state.currRow,"-").concat(this.state.currCol)).className="node",this.setState({currRow:e,currCol:t}),this.state.grid[e][t].isStart=!0,document.getElementById("node-".concat(e,"-").concat(t)).className="node node-start";this.setState({START_NODE_ROW:e,START_NODE_COL:t})}else if(this.state.isFinishNode){if("node node-wall"!==n)this.state.grid[this.state.currRow][this.state.currCol].isFinish=!1,document.getElementById("node-".concat(this.state.currRow,"-").concat(this.state.currCol)).className="node",this.setState({currRow:e,currCol:t}),this.state.grid[e][t].isFinish=!0,document.getElementById("node-".concat(e,"-").concat(t)).className="node node-finish";this.setState({FINISH_NODE_ROW:e,FINISH_NODE_COL:t})}else if(this.state.isWallNode){var s=w(this.state.grid,e,t);this.setState({grid:s})}}}},{key:"handleMouseUp",value:function(e,t){if(!this.state.isRunning){if(this.setState({mouseIsPressed:!1}),this.state.isStartNode){var n=!this.state.isStartNode;this.setState({isStartNode:n,START_NODE_ROW:e,START_NODE_COL:t})}else if(this.state.isFinishNode){var s=!this.state.isFinishNode;this.setState({isFinishNode:s,FINISH_NODE_ROW:e,FINISH_NODE_COL:t})}this.getInitialGrid()}}},{key:"handleMouseLeave",value:function(){if(this.state.isStartNode){var e=!this.state.isStartNode;this.setState({isStartNode:e,mouseIsPressed:!1})}else if(this.state.isFinishNode){var t=!this.state.isFinishNode;this.setState({isFinishNode:t,mouseIsPressed:!1})}else if(this.state.isWallNode){var n=!this.state.isWallNode;this.setState({isWallNode:n,mouseIsPressed:!1}),this.getInitialGrid()}}},{key:"clearGrid",value:function(){if(!this.state.isRunning){var e=this.state.grid.slice(),t=!0,n=!1,s=void 0;try{for(var i,a=e[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,r=!0,l=!1,c=void 0;try{for(var u,d=o[Symbol.iterator]();!(r=(u=d.next()).done);r=!0){var h=u.value,f=document.getElementById("node-".concat(h.row,"-").concat(h.col)).className;"node node-start"!==f&&"node node-finish"!==f&&"node node-wall"!==f&&(document.getElementById("node-".concat(h.row,"-").concat(h.col)).className="node",h.isVisited=!1,h.distance=1/0,h.distanceToFinishNode=Math.abs(this.state.FINISH_NODE_ROW-h.row)+Math.abs(this.state.FINISH_NODE_COL-h.col)),"node node-finish"===f&&(h.isVisited=!1,h.distance=1/0,h.distanceToFinishNode=0),"node node-start"===f&&(h.isVisited=!1,h.distance=1/0,h.distanceToFinishNode=Math.abs(this.state.FINISH_NODE_ROW-h.row)+Math.abs(this.state.FINISH_NODE_COL-h.col),h.isStart=!0,h.isWall=!1,h.previousNode=null,h.isNode=!0)}}catch(m){l=!0,c=m}finally{try{r||null==d.return||d.return()}finally{if(l)throw c}}}}catch(m){n=!0,s=m}finally{try{t||null==a.return||a.return()}finally{if(n)throw s}}this.setState({algoInfo:""})}}},{key:"clearWalls",value:function(){if(!this.state.isRunning){var e=this.state.grid.slice(),t=!0,n=!1,s=void 0;try{for(var i,a=e[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,r=!0,l=!1,c=void 0;try{for(var u,d=o[Symbol.iterator]();!(r=(u=d.next()).done);r=!0){var h=u.value;"node node-wall"===document.getElementById("node-".concat(h.row,"-").concat(h.col)).className&&(document.getElementById("node-".concat(h.row,"-").concat(h.col)).className="node",h.isWall=!1)}}catch(f){l=!0,c=f}finally{try{r||null==d.return||d.return()}finally{if(l)throw c}}}}catch(f){n=!0,s=f}finally{try{t||null==a.return||a.return()}finally{if(n)throw s}}}}},{key:"visualize",value:function(e){if(!this.state.isRunning){this.clearGrid(),this.toggleIsRunning();var t,n=this.state.grid,s=n[this.state.START_NODE_ROW][this.state.START_NODE_COL],i=n[this.state.FINISH_NODE_ROW][this.state.FINISH_NODE_COL];switch(e){case"Dijkstra":t=v(n,s,i);break;case"BFS":t=function(e,t,n){for(var s=[],i=[t];i.length;){var a=i.shift();if(a===n)return s;if(!a.isWall&&(a.isStart||!a.isVisited)){a.isVisited=!0,s.push(a);var o=a.col,r=a.row,l=void 0;r>0&&((l=e[r-1][o]).isVisited||(l.previousNode=a,i.push(l))),r<e.length-1&&((l=e[r+1][o]).isVisited||(l.previousNode=a,i.push(l))),o>0&&((l=e[r][o-1]).isVisited||(l.previousNode=a,i.push(l))),o<e[0].length-1&&((l=e[r][o+1]).isVisited||(l.previousNode=a,i.push(l)))}}}(n,s,i);break;case"DFS":t=function(e,t,n){var s=[],i=[];for(i.push(t);i.length;){var a=i.pop();if(a===n)return s;if(!a.isWall&&(a.isStart||!a.isVisited)){a.isVisited=!0,s.push(a);var o=a.col,r=a.row,l=void 0;r>0&&((l=e[r-1][o]).isVisited||(l.previousNode=a,i.push(l))),r<e.length-1&&((l=e[r+1][o]).isVisited||(l.previousNode=a,i.push(l))),o>0&&((l=e[r][o-1]).isVisited||(l.previousNode=a,i.push(l))),o<e[0].length-1&&((l=e[r][o+1]).isVisited||(l.previousNode=a,i.push(l)))}}}(n,s,i)}var a=function(e){var t=[],n=e;for(;null!==n;)t.unshift(n),n=n.previousNode;return t}(i);a.push("end"),this.animate(t,a),this.setState({algoInfo:e})}}},{key:"animate",value:function(e,t){for(var n=this,s=function(s){if(s===e.length)return setTimeout((function(){n.animateShortestPath(t)}),10*s),{v:void 0};setTimeout((function(){var t=e[s],n=document.getElementById("node-".concat(t.row,"-").concat(t.col)).className;"node node-start"!==n&&"node node-finish"!==n&&(document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-visited")}),10*s)},i=0;i<=e.length;i++){var a=s(i);if("object"===typeof a)return a.v}}},{key:"animateShortestPath",value:function(e){for(var t=this,n=function(n){"end"===e[n]?setTimeout((function(){t.toggleIsRunning()}),50*n):setTimeout((function(){var t=e[n],s=document.getElementById("node-".concat(t.row,"-").concat(t.col)).className;"node node-start"!==s&&"node node-finish"!==s&&(document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-shortest-path")}),40*n)},s=0;s<e.length;s++)n(s)}},{key:"render",value:function(){var e=this,t=this.state,n=t.grid,s=t.mouseIsPressed;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-8"},i.a.createElement("table",{className:"grid-container",onMouseLeave:function(){return e.handleMouseLeave()}},i.a.createElement("tbody",{className:"grid"},n.map((function(t,n){return i.a.createElement("tr",{key:n},t.map((function(t,n){var a=t.row,o=t.col,r=t.isFinish,l=t.isStart,c=t.isWall;return i.a.createElement(m,{key:n,col:o,isFinish:r,isStart:l,isWall:c,mouseIsPressed:s,onMouseDown:function(t,n){return e.handleMouseDown(t,n)},onMouseEnter:function(t,n){return e.handleMouseEnter(t,n)},onMouseUp:function(){return e.handleMouseUp(a,o)},row:a})})))})))),i.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){return e.clearGrid()}},"Clear Grid"),i.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:function(){return e.clearWalls()}},"Clear Walls"),i.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.visualize("Dijkstra")}},"Dijkstra's"),i.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.visualize("BFS")}},"Bread First Search"),i.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.visualize("DFS")}},"Depth First Search")),i.a.createElement("div",{className:"col-md-4 d-flex flex-column justify-content-center"},i.a.createElement("h1",null,this.state.algoInfo||"Algorithm information here..."),"Dijkstra"===this.state.algoInfo&&i.a.createElement(p,null),"BFS"===this.state.algoInfo&&i.a.createElement(y,null),"DFS"===this.state.algoInfo&&i.a.createElement(S,null)))}}]),t}(s.Component),w=function(e,t,n){var s=e.slice(),i=s[t][n];if(!i.isStart&&!i.isFinish&&i.isNode){var a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},i,{isWall:!i.isWall});s[t][n]=a}return s};var I=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.2ca87404.chunk.js.map