const horizontalScrolls = document.getElementsByClassName("scroll-horizontal");

for (const element of horizontalScrolls) {

	element.addEventListener('wheel', function(event) {

		if (event.deltaY !== 0) {
			event.preventDefault();
			element.scrollLeft += event.deltaY;
		}
	});	
}

console.log(horizontalScrolls);