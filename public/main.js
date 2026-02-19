// const horizontalScrolls = document.getElementsByClassName("scroll-horizontal");
//
// for (const element of horizontalScrolls) {
//
// 	element.addEventListener('wheel', function(event) {
//
// 		if (event.deltaY !== 0) {
// 			event.preventDefault();
// 			element.scrollLeft += event.deltaY;
// 		}
// 	});
// }

// Tab / category filter logic
function filterProjects(category) {
	const cards = document.querySelectorAll('main#main section article.card');
	let anyVisible = false;
	for (const card of cards) {
		if (category === 'all' || card.dataset.category === category) {
			card.classList.remove('is-hidden');
			card.removeAttribute('aria-hidden');
			anyVisible = true;
		} else {
			card.classList.add('is-hidden');
			card.setAttribute('aria-hidden', 'true');
		}
	}
	const empty = document.getElementById('projects-empty');
	if (empty) {
		empty.style.display = anyVisible ? 'none' : 'block';
	}
}

function setActiveTab(button) {
	const tabs = document.querySelectorAll('.project-tab');
	for (const t of tabs) {
		t.classList.remove('active');
		t.setAttribute('aria-selected', 'false');
	}
	button.classList.add('active');
	button.setAttribute('aria-selected', 'true');
}

// initialize tabs after DOM is ready
window.addEventListener('DOMContentLoaded', () => {
	const tabsContainer = document.querySelector('.project-tabs');
	if (tabsContainer) {
		tabsContainer.addEventListener('click', (e) => {
			const btn = e.target.closest('.project-tab');
			if (!btn) return;
			const category = btn.dataset.category || 'all';
			setActiveTab(btn);
			filterProjects(category);
			// update hash for bookmarking
			if (category === 'all') {
				history.replaceState(null, '', window.location.pathname);
			} else {
				history.replaceState(null, '', `#${category}`);
			}
		});

		// apply initial category from the hash (if present)
		const hash = window.location.hash.replace('#', '');
		const initial = hash || 'all';
		const initialBtn = document.querySelector(`.project-tab[data-category="${initial}"]`);
		if (initialBtn) setActiveTab(initialBtn);
		filterProjects(initial);
	}
});