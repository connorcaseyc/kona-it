// js/navbar.js
// Function to load the navbar
function loadNavbar() {
	const navbarPlaceholder = document.getElementById('navbar-placeholder');
	if (navbarPlaceholder) {
		fetch('../components/navbar.html')
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Failed to load navbar: ${response.statusText}`);
				}
				return response.text();
			})
			.then((data) => {
				navbarPlaceholder.innerHTML = data;
			})
			.catch((error) => console.error('Error loading navbar:', error));
	} else {
		console.error('Navbar placeholder not found in the document.');
	}
}

// Call the function to load the navbar
loadNavbar();
