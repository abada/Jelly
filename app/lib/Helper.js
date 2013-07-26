/**
 * @author Patricio Aguero
 */
function Helper(){
	this.UrlBase = 'http://brillanteviajero.cl/jellyrate/index.php';
};


sync = function(httpclient,timeout){
    var expire_time  = new Date().getTime() + timeout;
    while(httpclient.readyState<=4 ){
        if(httpclient.readyState==4 && httpclient.status == 200){
        	//alert(httpclient.responseText); 
        	return JSON.parse(httpclient.responseText);
        }
        var now_time = new Date().getTime();
        if(now_time > expire_time){
            // do what you need before return 
            return '"false"'; //{val:{isOk:false,message:LA('connection_error')}};
        }
    }
    return '"false"';
};
// this is request to url with params like '&username='u.value etc...
getRequest = function(url, params,timeout){
    var xhr = Ti.Network.createHTTPClient();
    xhr.open('GET', url);
    xhr.send(params);
    return sync(xhr,timeout);
};
             
module.exports = Helper;