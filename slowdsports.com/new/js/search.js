var input = document.getElementById('text_filter');
	var filter = document.getElementById('filter');

	input.addEventListener( 'keyup', function(event)
	{
		if ( input.value == "" )
		{
			filter.setAttribute( 'uk-filter-control', '' );
		}

		else
		{
			filter.setAttribute( 'uk-filter-control', 'filter:[data-name*=\'' + input.value + '\'i]' );
		}

		filter.click();
	});