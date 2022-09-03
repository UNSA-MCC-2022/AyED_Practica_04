function drawGraph(dotString) {
    var viz = new Viz();

    viz.renderSVGElement(dotString)
        .then(function (element) {
            console.log(element);
            var parentTree = document.getElementById('KdTreeSvg');
            parentTree.outerHTML = element.outerHTML;


            //element.parent("KdTreeSvg");
            document.body.appendChild(element);
        })
        .catch(error => {
            viz = new Viz();
            console.error(error);
        });
}