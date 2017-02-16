var source = `
$("#search").click(function(){
		$("#pageNo").val(1);
		$("#queryForm").trigger("submit");
	});
	$("#on").addClass("now");
	
	var totalCount = window.parseInt('8086',10),
		pageCount = window.parseInt('506',10),
		pageNo =window.parseInt('2',10);
		`;

var totalIndex = source.indexOf('window.parseInt');
var totalStart = totalIndex + 17;
var totalEnd = source.indexOf('\'',totalStart);
var totalCount = source.substring(totalStart,totalEnd);
console.log(totalCount)

var pageIndex = source.indexOf('window.parseInt',totalEnd);
var pageStart = pageIndex + 17;
var pageEnd = source.indexOf('\'',pageStart);
var pageCount = source.substring(pageStart,pageEnd);
console.log(pageCount)