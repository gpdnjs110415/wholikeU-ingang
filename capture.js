function partShot() {
    console.log("share work!");
    html2canvas(document.body).then(function (canvas) {
        saveAs(canvas.toDataURL('finddimigofaceresult.jpg'));
    }).catch(function (err) {
        console.log(err);
    });
}





function saveAs(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        link.href = uri; link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
}