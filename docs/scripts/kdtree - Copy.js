k = 2;

class Node {
    constructor(point, axis) {
        this.point = point;
        this.left = null;
        this.right = null;
        this.axis = axis;
    }
}

<<<<<<< HEAD
function getHeight(node) {
	if(node == null)   
		return 0;
	else   
		return 1 +(Math.max(getHeight(node.left),getHeight(node.right)));   
}

function generate_dot(node){
	var cad = "";
	if(node == null)
		return "";

	if(node.left != null)
	{
		cad=cad + '"' +node.point.toString() + "\"";
		cad=cad + " -> " + '"' + node.left.point.toString() + '"' + ";" + "\n";
	}
	if(node.right!=null)
	{
		cad=cad+"\""+node.point.toString()+"\"";
		cad=cad+" -> "+'"'+node.right.point.toString()+'"'+";"+"\n";
	}
	return cad+generate_dot(node.left)+generate_dot(node.right);
}

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
k = 2;

class Node {
    constructor(point, axis) {
        this.point = point;
        this.left = null;
        this.right = null;
        this.axis = axis;
    }
}

=======
>>>>>>> b640342b02d5931b92cdf0e0c41ccedda983a685
function getHeight(node) { 
    if(node == null)   
        return 0;
    else   
        return 1 +(Math.max(getHeight(node.left),getHeight(node.right))); 
}
function generate_dot(node) { 
    var cad="";
	if(node==null)
		return "";

	if(node.left!=null)
	{
		cad=cad+'"'+node.point.toString()+"\"";
		cad=cad+" -> "+'"'+node.left.point.toString()+'"'+";"+"\n";
	}
	if(node.right!=null)
	{
		cad=cad+"\""+node.point.toString()+"\"";
		cad=cad+" -> "+'"'+node.right.point.toString()+'"'+";"+"\n";
	}
	return cad+generate_dot(node.left)+generate_dot(node.right);
}

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

<<<<<<< HEAD
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
=======
function distanceSquared ( point1 , point2 ){
    var distance = 0;
    for (var i = 0; i < k; i ++)
    distance += Math.pow (( point1 [i] - point2 [i]) , 2) ;
    return Math.sqrt ( distance );
}

function closest_point_brute_force ( points , point ) {
    var min = 0; 
    for (var i = 0; i < point; ++i) 
        for (var j = i+1; j < point; ++j) 
            if (distanceSquared(P[i], P[j]) < min) 
                min = distanceSquared(P[i], P[j]); 
    return min;
}

var data = [
    [40 ,70] ,
    [70 ,130] ,
    [90 ,40] ,
    [110 , 100] ,
    [140 ,110] ,
    [160 , 100]
];

var point = [140 ,90]; // query

closest_point_brute_force ( data , point )


>>>>>>> 778bb6556a0e8bab8243de1db9bdc695eae5f66e
