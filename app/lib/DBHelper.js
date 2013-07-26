function DBHelper(){
	var dbConnect;
	function openDbConnection() {
	 	this.dbConnect = Ti.Database.open('jellyDB');
	 	return this.dbConnect;
	}
	
	function closeDbConnection(){
		this.dbConnect.close();
	}
	
};

module.exports = DBHelper;