
			(function() {

				/* Mockup responsiveness */
				var body = docElem = window.document.documentElement,
					wrap = document.getElementById( 'marquee' ),
					mockup = document.getElementById( 'desktop-wrapper' ),
					mockupWidth = mockup.offsetWidth;

				scaleMockup();

				function scaleMockup() {
					var wrapWidth = wrap.offsetWidth,
						val = wrapWidth / mockupWidth;

					mockup.style.transform = 'scale3d(' + val + ', ' + val + ', 1)';
				}
				
				window.addEventListener( 'resize', resizeHandler );

				function resizeHandler() {
					function delayed() {
						resize();
						resizeTimeout = null;
					}
					if ( typeof resizeTimeout != 'undefined' ) {
						clearTimeout( resizeTimeout );
					}
					resizeTimeout = setTimeout( delayed, 50 );
				}

				function resize() {
					scaleMockup();
				}
			})();