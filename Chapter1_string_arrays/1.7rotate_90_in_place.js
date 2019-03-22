// rotating image
const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12], [13,14,15,16]]; //n*n matrix
const n = 4 // length of matrix 

function rotateImage(matrix) {
    const rotations = Math.floor(n/2);
    for(let i=0; i<rotations; i++) {
        let top = matrix[i];
        let bottom = matrix[n-1-i];
        let left = [];
        let right = [];gf
        for(let j=i; j<n-i; j++) {
            left.push(matrix[j][i]);
            right.push(matrix[j][n-1-i]);
        }
        matrix[i] = left.reverse();
        matrix[n-1-i] = right.reverse();
        for(let j=i+1; j<n-i-1; j++) {
            matrix[j][0] = bottom[j];
            matrix[j][n-1-i] = top[j];
        }
    }
    return matrix;
}
console.log(rotateImage(matrix));