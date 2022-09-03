function drawGraph(dotString) {
    let diagramText = " digraph G { " + dotString +" }";
    let viz = new Viz();

    viz.renderSVGElement(diagramText)
        .then(function (element) {
            //console.log(element);
            var parentTree = document.getElementById('KdTreeSvg');
            parentTree.outerHTML = element.outerHTML;
            //document.body.appendChild(element);
        })
        .catch(error => {
            //viz = new Viz();
            console.error(error);
        });
}