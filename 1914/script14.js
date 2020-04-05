/* Sortable — is a minimalist JavaScript library for reorderable drag-and-drop lists on modern browsers and touch devices. No jQuery. Supports Meteor, AngularJS, React and any CSS library, e.g. Bootstrap.
https://github.com/RubaXa/Sortable */

var $component = 'Timeline';

	function sort() {
		var $itemIndex = 0;

		console.log('reorder');
		
		$('.' + $component).find('.' + $component + '-item').each(function(index) {

			index++;
			$itemIndex = (index < 10) ? '0' + index : index;
			


			if (index % 2 === 0) {
        $(this).addClass('is-right');
      }
      else {
        $(this).removeClass('is-right');
      }

		});
	}

	$(document).ready(function(){
						 sort();

	 	var el = document.getElementById($component);
      var sortable = Sortable.create(el, {
        draggable: '.' + $component + "-item", 
        handle: '.' + $component + "-item-top",
        animation: 250,
        scroll: true, // or HTMLElement
        scrollSensitivity: 60, // px, how near the mouse must be to an edge to start scrolling.
        scrollSpeed: 10, // px
        ghostClass: "is-dropping",

        onStart: function (event) {
          $('.' + $component).toggleClass('is-dragging');
          console.log('onStart')
        },

        onEnd: function (event) {
          $('.' + $component).toggleClass('is-dragging');
          sort();
        },

      });
  });
  
