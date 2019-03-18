/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  a = preferences.map(x=>x-1);
let triangles_count = 0;
let visited = {}; 
for(let i = 0; i<a.length; i++){
  if(i in visited){
    continue;
  } 
  let k = a[i];
  let tmp_visited = {}; 
tmp_visited[i] = 0;
  while(!(tmp_visited.hasOwnProperty(k))){
    tmp_visited[k] = Object.keys(tmp_visited).length;    
    k = a[k];
  }
  if(Object.keys(tmp_visited).length == 3 && tmp_visited[k] === 0){ 
    triangles_count++;
    Object.keys(tmp_visited).forEach((x)=>{
      visited[x] = true;
    });
  }
}
return triangles_count;

};