// import { BinaryMinHeap } from "../heap/binary-min-heap";

// interface GraphListElement<K, V> {
//     key: K;
//     data: V;
//     adjacents: GraphListElement<K, V>[];
// }

// interface GraphMatrixElement<K, V> {
//     key: K;
//     data: V;
// }

// interface GraphElement<K, V> {
//     key: number;
//     data: V;
// }

// export class DirectedGraph<K, V> {
//     private adjacencyMatrix: number[][] = [];
//     private adjacencyList: GraphListElement<K, V>[] = [];

//     constructor() {

//     }

//     addEdge = (source: GraphElement<K, V>, destination: GraphElement<K, V>, weight: number) => {
//         this.adjacencyMatrix[source.key][destination.key] = weight;
//         let priQueue = new BinaryMinHeap<K>();

//         for (let i = 1; i < this.adjacencyMatrix.length; i++)
//         {
//             let vertexDegree = 0;
//             for (let j = 1; j < this.adjacencyMatrix.length; j++)
//             {
//                 if (this.adjacencyMatrix[j][i] > 0) {
//                     vertexDegree++;
//                 }
//             }
    
//             queue.push(make_pair(vertexDegree, i));
//         }
//     }
//     getShortestPath = (data: T) => {
//         //
//     }
// }

// void Graph:: printVerticeswithHighestInDegreeUsingMatrix() {
//     cout << "--- Printing matrix based result ---" << endl;

//     vector < pair < int, int >> vertexIds;
//     priority_queue < pair < int, int >> queue;

//     for (int i = 1; i < this -> size; i++)
//     {
// 		int vertexDegree = 0;
//         for (int j = 1; j < this -> size; j++)
//         {
//             if (this -> adjacencyMatrix[j][i] > 0) {
//                 vertexDegree++;
//             }
//         }

//         queue.push(make_pair(vertexDegree, i));
//     }

//     pair < int, int > maxElement = queue.top();
// 	int max = maxElement.first;

//     while (!queue.empty()) {
//         pair < int, int > nextMaxElement = queue.top();

//         if (nextMaxElement.first < max) {
//             break;
//         }

//         vertexIds.push_back(make_pair(nextMaxElement.second, nextMaxElement.first));
//         queue.pop();
//     }

//     cout << "InDegree" << endl;

//     for (int i = 0; i < vertexIds.size(); ++i) {
//         cout << "ID: " << vertexIds[i].first << " Degree: " << vertexIds[i].second << endl;
//     }

//     cout << endl;
// }

// void Graph:: printVerticeswithHighestInDegreeUsingList() {
//     cout << "--- Printing list based result ---" << endl;

//     vector < pair < int, int >> vertexIds;
//     priority_queue < pair < int, int >> queue;

//     for (int i = 1; i < this -> size; i++)
//     {
// 		int vertexDegree = 0;

//         for (int j = 1; j < this -> size; j++)
//         {
//             if (i == j) {
//                 continue;
//             }

//             for (int k = 1; k < adjacencyList[j].size(); k++)
//             {
//                 if (adjacencyList[j].at(k).first == i && adjacencyList[j].at(k).second > 0) {
//                     vertexDegree++;
//                 }
//             }
//         }
//         queue.push(make_pair(vertexDegree, i));

//     }

//     pair < int, int > maxElement = queue.top();
// 	int max = maxElement.first;

//     while (!queue.empty()) {
//         pair < int, int > nextMaxElement = queue.top();

//         if (nextMaxElement.first < max) {
//             break;
//         }

//         vertexIds.push_back(make_pair(nextMaxElement.second, nextMaxElement.first));
//         queue.pop();
//     }

//     cout << "InDegree" << endl;

//     for (int i = 0; i < vertexIds.size(); ++i) {
//         cout << "ID: " << vertexIds[i].first << " Degree: " << vertexIds[i].second << endl;
//     }

//     cout << endl;
// }

// void Graph:: printVerticeswithHighestOutDegreeUsingMatrix() {
//     cout << "--- Printing matrix based result ---" << endl;

//     vector < pair < int, int >> vertexIds;
//     priority_queue < pair < int, int >> queue;

//     for (int i = 1; i < this -> size; i++)
//     {
// 		int vertexDegree = 0;
//         for (int j = 1; j < this -> size; j++)
//         {
//             if (this -> adjacencyMatrix[i][j] > 0) {
//                 vertexDegree++;
//             }
//         }

//         queue.push(make_pair(vertexDegree, i));
//     }

//     pair < int, int > maxElement = queue.top();
// 	int max = maxElement.first;

//     while (!queue.empty()) {
//         pair < int, int > nextMaxElement = queue.top();

//         if (nextMaxElement.first < max) {
//             break;
//         }

//         vertexIds.push_back(make_pair(nextMaxElement.second, nextMaxElement.first));
//         queue.pop();
//     }

//     cout << "OutDegree" << endl;

//     for (int i = 0; i < vertexIds.size(); ++i) {
//         cout << "ID: " << vertexIds[i].first << " Degree: " << vertexIds[i].second << endl;
//     }

//     cout << endl;
// }

// void Graph:: printVerticeswithHighestOutDegreeUsingList() {
//     cout << "--- Printing list based result ---" << endl;

//     vector < pair < int, int >> vertexIds;
//     priority_queue < pair < int, int >> queue;

//     for (int i = 1; i < this -> size; i++)
//     {
// 		int vertexDegree = 0;

//         for (int k = 1; k < adjacencyList[i].size(); k++)
//         {
//             if (adjacencyList[i].at(k).second > 0) {
//                 vertexDegree++;
//             }
//         }

//         queue.push(make_pair(vertexDegree, i));
//     }

//     pair < int, int > maxElement = queue.top();
// 	int max = maxElement.first;

//     while (!queue.empty()) {
//         pair < int, int > nextMaxElement = queue.top();

//         if (nextMaxElement.first < max) {
//             break;
//         }

//         vertexIds.push_back(make_pair(nextMaxElement.second, nextMaxElement.first));
//         queue.pop();
//     }

//     cout << "OutDegree" << endl;

//     for (int i = 0; i < vertexIds.size(); ++i) {
//         cout << "ID: " << vertexIds[i].first << " Degree: " << vertexIds[i].second << endl;
//     }

//     cout << endl;
// }

// void Graph:: printVerticesFarAwayFromSpecifiedVertexUsingMatrix(int vertexId, int edgeCount) {
//     cout << "--- Printing matrix based result ---" << endl;

//     queue < int > queue;
// 	int foundEdge = 0;

//     queue.push(vertexId);

//     while (!queue.empty() && edgeCount != foundEdge) {
// 		int vertexNumber = queue.front();
//         queue.pop();
//         int * adjacencyArray = this -> adjacencyMatrix[vertexNumber];

//         for (int i = 1; i < this -> size; i++)
//         {
//             if (adjacencyArray[i] > 0) {
//                 queue.push(i);
//             }
//         }

//         foundEdge++;
//     }

//     cout << "Vertices after " << edgeCount << " Edge far away from Vertex " << vertexId << endl;

//     while (!queue.empty()) {
//         cout << "ID: " << queue.front() << endl;
//         queue.pop();
//     }

//     cout << endl;
// }

// void Graph:: printVerticesFarAwayFromSpecifiedVertexUsingList(int vertexId, int edgeCount) {
//     cout << "--- Printing list based result ---" << endl;

//     queue < int > queue;
// 	int foundEdge = 0;

//     queue.push(vertexId);

//     while (!queue.empty() && edgeCount != foundEdge) {
// 		int vertexNumber = queue.front();
//         queue.pop();
//         vector < pair < int, int >> adjacencyVector = this -> adjacencyList[vertexNumber];

//         for (int i = 1; i < adjacencyVector.size(); i++)
//         {
//             if (adjacencyVector[i].second > 0) {
//                 queue.push(adjacencyVector[i].first);
//             }
//         }

//         foundEdge++;
//     }

//     cout << "Vertices after " << edgeCount << " Edge far away from Vertex " << vertexId << endl;

//     while (!queue.empty()) {
//         cout << "ID: " << queue.front() << endl;
//         queue.pop();
//     }

//     cout << endl;
// }

// void Graph:: printShortestPath() {
//     cout << "--- Printing matrix based result ---" << endl;

//     for (int i = 1; i < this -> size; i++)
//     {
//         applyShortestPath(i);

//         cout << "Shortest Paths for the source vertex with ID:  " << i << endl;

//         for (int j = 1; j < this -> size; j++)
//         {
//             cout << "Destination: " << j << " Cost: " << distanceMatrix[i][j] << endl;
//         }

//         cout << endl;
//     }
// }

// void Graph:: printShortestPath(int sourceId) {
//     cout << "--- Printing matrix based result ---" << endl;

//     applyShortestPath(sourceId);

//     cout << "Shortest Paths for the source vertex with ID:  " << sourceId << endl;

//     for (int j = 1; j < this -> size; j++)
//     {
//         cout << "Destination: " << j << " Cost: " << distanceMatrix[sourceId][j] << endl;
//     }

//     cout << endl;
// }

// void Graph:: printTwoMostDistantVerticesUsingMatrix() {
//     cout << "--- Printing matrix based result ---" << endl;

//     for (int i = 1; i < this -> size; i++)
//     {
//         applyShortestPath(i);
//     }

// 	int max = 0;
//     pair < int, int > pathPair;

//     for (int i = 1; i < this -> size; i++)
//     {
//         for (int j = 1; j < this -> size; j++)
//         {
// 			int distance = distanceMatrix[i][j];

//             if (distance != INT_MAX && distance > max) {
//                 max = distanceMatrix[i][j];
//                 pathPair.first = i;
//                 pathPair.second = j;
//             }
//         }
//     }

//     cout << "The most distant pair ->" << endl;
//     cout << "\tSource: " << pathPair.first << endl;
//     cout << "\tDestination: " << pathPair.second << endl;
//     cout << "\tCost : " << max << endl;
// }

// void Graph:: applyShortestPath(int sourceId) {
//     vector < int > vertexIds;
//     priority_queue < vertexPair, vector < vertexPair >, greater < vertexPair >> pathQueue;

//     for (int i = 1; i < this -> size; i++)
//     {
//         distanceMatrix[sourceId][i] = INT_MAX;
//     }

//     distanceMatrix[sourceId][sourceId] = 0;

//     pathQueue.push(make_pair(0, sourceId));

//     while (!pathQueue.empty()) {
// 		vertexPair vertex = pathQueue.top();
//         pathQueue.pop();

//         int * adjacencyArray = this -> adjacencyMatrix[vertex.second];

//         for (int i = 1; i < this -> size; i++)
//         {

//             if (adjacencyArray[i] > 0) {
// 				int originalDistance = adjacencyArray[i];
// 				int distance = vertex.first + originalDistance;

//                 if (distance < distanceMatrix[sourceId][i]) {
//                     distanceMatrix[sourceId][i] = distance;
//                     pathQueue.push(make_pair(distance, i));
//                 }
//             }
//         }
//     }
// }

// void Graph:: initializeArrays() {
//     for (int i = 0; i < this -> size; i++)
//     {
//         adjacencyMatrix[i] = (int *)calloc(this -> size, sizeof(int));
//     }

//     for (int i = 0; i < this -> size; i++)
//     {
//         distanceMatrix[i] = (int *)calloc(this -> size, sizeof(int));
//     }
// }