const width = 500; //250;
const height = 500; //200;

function setup() {

    let kdTreeCanvas = createCanvas(width, height);
    kdTreeCanvas.parent("KdTreeCanvas");

    background(0);
    for (let x = 0; x < width; x += width / 10) {
        for (let y = 0; y < height; y += height / 10) {
            stroke(125, 125, 125);
            strokeWeight(1);
            line(x, 0, x, height);
            line(0, y, width, y);
        }
    }

    let data = [];
    for (let i = 0; i < 12; i++) {
        let x = Math.floor(Math.random() * width);
        let y = Math.floor(Math.random() * height);
        data.push([x, y]);

        fill(255, 255, 255);
        circle(x, height - y, 7); // 200 -y para q se dibuje apropiadamente
        textSize(12);
        text(x + ',' + y, x + 5, height - y);// 200 -y para q se dibuje apropiadamente
    }

    let root = build_kdtree(data);
    drawGraph(generate_dot(root));
    console.log(root);
}


/*
digraph G {
2 " 106 ,189 " -> "6 ,114";
3 "6 ,114" -> " 90 ,102";
4 " 90 ,102 " -> "21 ,84";
5 "6 ,114" -> " 84 ,138";
6 " 84 ,138 " -> "5 ,150";
7 " 106 ,189 " -> " 148 ,85 ";
8 " 148 ,85 " -> " 181 ,45 ";
9 " 181 ,45 " -> " 161 ,29 ";
10 " 148 ,85 " -> " 158 ,120 ";
11 }

*/