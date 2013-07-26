function Helper() {
    this.UrlBase = "http://brillanteviajero.cl/jellyrate/index.php";
}

sync = function(httpclient, timeout) {
    var expire_time = new Date().getTime() + timeout;
    while (4 >= httpclient.readyState) {
        if (4 == httpclient.readyState && 200 == httpclient.status) return JSON.parse(httpclient.responseText);
        var now_time = new Date().getTime();
        if (now_time > expire_time) return '"false"';
    }
    return '"false"';
};

getRequest = function(url, params, timeout) {
    var xhr = Ti.Network.createHTTPClient();
    xhr.open("GET", url);
    xhr.send(params);
    return sync(xhr, timeout);
};

module.exports = Helper;