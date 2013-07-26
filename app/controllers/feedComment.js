var comments = Alloy.Models.comments;

function refreshComments() {
	var respuesta = comments.getComments(3);
	if(respuesta==='"false"') {
		alert("Sin comentarios");
	} else {
		var rows = [];
		_.each(respuesta, function(item) {
			var detail = comments.getComment(item.id_post_comment);
			if(detail==='"false"' || detail==="false") {
				alert("erradas");
			} else {
				rows.push(Alloy.createController('commentRow', {
					articleUrl: detail.id_post_comment,
					comment: 'Comentario en duro. El servicio no lo retorna',
					date: detail.date
				}).getView());
			}
		});
		$.table.setData(rows);
	}
}

refreshComments();