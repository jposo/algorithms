// there are two main representation of a graph
// an adjacency list and an adjacency matrix
// here we will use the adjacency list
// in an adjacency list, each index of the array representes a vertex in the graph
// inside each vertex, there is an array that contains the edges of that vertex
// for example, if vertex 0 might has: [{to: 1, w: 1}, {to: 2, w: 5}]
// this means that there are two connections from vertex 0, to edge 1 (with weight of 1)
// .. and to edge 2 (with weight of 5)

// in this sceneario, we will use dijkstra algorithm to return the shortest path to the
// .. destination (sink) from the starting node (source) in a graph
// we need to keep track of the distances from the starting node to any other node
// we need to keep track if we have already visited a node
// we need to keep track of the previous node of any node (for building the path)
// in each iteration, we need to check if the graph has any unvisited nodes
// .. this means that we have not seen it, and its distance is less than infinity
// it is needed to get the next lowest distance unvisited vertex in each iteration
// .. this vertex be process
// in each process we set the vertex as seen and get all adjacent edges
// if we have seen the edge destination, we skip
// .. if we have not, we check if the distance between the current vertex plus the edge's weight
// .. is less than what is stored in the distance to that vertex from the source 
// continue until there are no longer any unvisited nodes in the graph
// to build the path from the sink to the source, we have been tracking the previous vertex from each one
// .. so, we can loop until we have reached -1, aka the source
// .. if we push the indices to an array, we will have the path reverse (so just reverse it xd)
// use Infinity (just like that), to represent the maximum int value in javascript
function getLowestUnvisited(seen: boolean[], dists: number[]): number {

}
function hasUnvisited(seen: boolean[], dists: number[]): boolean {

}
export default function dijkstra_list(source: number, sink: number, graph: WeightedAdjacencyList): number[] {

}