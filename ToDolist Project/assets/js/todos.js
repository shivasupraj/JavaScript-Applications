$("ul").on("click","li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		($this).remove();	
	});
	// Use event.stopPropagaion to avoid event bubbling
	event.stopPropagation();
});

$("input[type='text']").on("keypress",function(event){
	if(event.which == 13){
		var toDo = $(this).val();
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>"+toDo+"</li>");
		$(this).val("");
	}
});

$(".fa-plus").on("click", function(event){
	$("input[type='text']").fadeToggle();
});