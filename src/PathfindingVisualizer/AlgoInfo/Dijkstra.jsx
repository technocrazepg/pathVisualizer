import React from 'react'

function Dijkstra() {
  return (
    <div className='text-justify'>
        <p>Djikstra used this property in the opposite direction i.e we overestimate the distance of each vertex from the starting vertex. Then we visit each node and its neighbors to find the shortest subpath to those neighbors. The algorithm uses a greedy approach in the sense that we find the next best solution hoping that the end result is the best solution for the whole problem.</p>
    </div>
  )
}

export default Dijkstra