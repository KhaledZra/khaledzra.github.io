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

// Helper to safely read hash and normalize into category names we expect
function readCategoryFromHash() {
	const h = window.location.hash.replace('#', '').trim();
	if (!h) return 'all';
	// whitelist categories to avoid unexpected values
	const allowed = ['all', 'personal', 'futuregames'];
	return allowed.includes(h) ? h : 'all';
}

// initialize tabs after DOM is ready
window.addEventListener('DOMContentLoaded', () => {
	const tabsContainer = document.querySelector('.project-tabs');
	if (tabsContainer) {
		// Use delegated click handler; works in Brave/Chromium-based with any default prevention quirks
		tabsContainer.addEventListener('click', (e) => {
			const btn = e.target.closest('.project-tab');
			if (!btn) return;
			e.preventDefault();
			const category = btn.dataset.category || 'all';
			setActiveTab(btn);
			filterProjects(category);
			// update hash for bookmarking; use location.hash to maximize compatibility
			if (category === 'all') {
				try { history.replaceState(null, '', window.location.pathname); } catch (err) { window.location.hash = ''; }
			} else {
				try { history.replaceState(null, '', `#${category}`); } catch (err) { window.location.hash = `#${category}`; }
			}
		});

		// keyboard support: Enter/Space should activate a focused tab
		tabsContainer.addEventListener('keydown', (e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				const btn = e.target.closest && e.target.closest('.project-tab') ? e.target.closest('.project-tab') : null;
				if (!btn) return;
				e.preventDefault();
				btn.click();
			}
		});

		// apply initial category from the hash (if present)
		const initial = readCategoryFromHash();
		const initialBtn = document.querySelector(`.project-tab[data-category="${initial}"]`);
		if (initialBtn) setActiveTab(initialBtn);
		filterProjects(initial);

		// ensure tabs respond to manual hash changes (back/forward / browser behavior differences)
		window.addEventListener('hashchange', () => {
			const cat = readCategoryFromHash();
			const btn = document.querySelector(`.project-tab[data-category="${cat}"]`);
			if (btn) setActiveTab(btn);
			filterProjects(cat);
		});
	}
});

// export for debugging in console if needed (non-module global)
window._siteTabs = { filterProjects, setActiveTab, readCategoryFromHash };
