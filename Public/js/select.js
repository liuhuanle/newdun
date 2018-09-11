		//全选、全不选
	$(document).on('click','#checkall',function(){
	    if($(this).is(":checked")){
	        $('.checks').prop('checked',true);
	    }else{
	        $('.checks').prop('checked',false);
	    }
	});