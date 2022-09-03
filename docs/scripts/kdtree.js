k = 2;

class Node {
    constructor(point, axis) {
        this.point = point;
        this.left = null;
        this.right = null;
        this.axis = axis;
    }
}

function getHeight(node) { }
function generate_dot(node) { }

function build_kdtree(points, depth = 0) {
    var n = points.length;
    var axis = depth % k;


    if (n <= 0) {
        return null;
    }
    if (n == 1) {
        return new Node(points[0], axis)
    }

    var median = Math.floor(points.length / 2);

    // sort by the axis
    points.sort(function (a, b) {
        return a[axis] - b[axis];
    });
    //console.log(points);

    var left = points.slice(0, median);
    var right = points.slice(median + 1);

    //console.log(right);

    var node = new Node(points[median].slice(0, k), axis);
    node.left = build_kdtree(left, depth + 1);
    node.right = build_kdtree(right, depth + 1);

    return node;

}

// function getTextFromTree(root){
//     return 'digraph G {
//          " 106 ,189 " -> "6 ,114";
//          "6 ,114" -> " 90 ,102";
//          " 90 ,102 " -> "21 ,84";
//          "6 ,114" -> " 84 ,138";
//          " 84 ,138 " -> "5 ,150";
//          " 106 ,189 " -> " 148 ,85 ";
//          " 148 ,85 " -> " 181 ,45 ";
//          " 181 ,45 " -> " 161 ,29 ";
//          " 148 ,85 " -> " 158 ,120 ";
//         ';
// }