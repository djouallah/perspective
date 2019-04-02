// Location of our dataset.
var url = 'https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json';
var xhr = new XMLHttpRequest();

// Make a request for the dataset.
xhr.open('GET', url, true);
xhr.onload = function () {
    
    // Create a new Perspective WebWorker instance.
    var worker = perspective.worker();
	
    // Create a new Perspective table in our `worker` with the response.
    var table = worker.table(JSON.parse(xhr.response));
    
    // Load the `table` in each `<perspective-viewer>` DOM reference.
    for (var el of document.getElementsByTagName('perspective-viewer')) {
        el.load(table);
    }
}
xhr.send(null);
