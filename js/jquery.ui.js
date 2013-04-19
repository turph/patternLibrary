$(document).ready(function(){
	
	// Custom Select Widget
	
	if($('.ui-select').length > 0){
		
		$('.ui-select').each(function(){
			$obj = $(this);
			$obj.wrap($('<div />').addClass('ui-custom-select'));
			$obj.before(
				$('<div />')
				.addClass('ui-custom-select-value')
			);

			$obj.after(
				$('<div />')
				.addClass('ui-custom-select-options')
			)
			
			$el = $obj.find('option');
			$parent = $obj.parent();		
			
			$el.each(function(i){
				if(!i){
					$parent.find('.ui-custom-select-value').html($(this).text());
				}
				$parent.find('.ui-custom-select-options').append(
					$('<div />')
					.addClass('ui-custom-select-option')
					.html($(this).text())
				)
			});
		});
		
		$('.ui-custom-select').click(function(event){
			event.stopPropagation();
			$(this).find('.ui-custom-select-options').show();
		});
		
		$('.ui-custom-select-option').click(function(event){
			event.stopPropagation();
			$option = $(this);
			$option_parent = $option.closest('.ui-custom-select');
			$option_parent.find('option').eq($option.index()).prop('selected', true);
			$option_parent.find('.ui-custom-select-value').html($option.text());
			$option.parent().hide();
		});
		
		$(window).click(function(){
			$('.ui-custom-select-options').hide();
		});

	}
	
});