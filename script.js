document.addEventListener('DOMContentLoaded', function() {
  const containerButtons = document.querySelectorAll('.container-button');
  const searchContainer = document.getElementById('search-container');
  const chatContainer = document.getElementById('chat-container');
  const marketplaceContainer = document.getElementById('marketplace-container');
  const jobsContainer = document.getElementById('jobs-search-container');
  const upgradeContainer = document.getElementById('upgrade-plan-container');

  containerButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const containerType = button.dataset.container;
      // Remove 'active' class from all buttons
      containerButtons.forEach(btn => btn.classList.remove('active'));
      // Add 'active' class to the clicked button
      button.classList.add('active');

      switch (containerType) {
        case 'search':
          searchContainer.style.display = 'block';
          chatContainer.style.display = 'none';
          marketplaceContainer.style.display = 'none';
          jobsContainer.style.display = 'none';
          focusInput('search-query');
          break;
        case 'chat':
          searchContainer.style.display = 'none';
          chatContainer.style.display = 'block';
          marketplaceContainer.style.display = 'none';
          jobsContainer.style.display = 'none';
          focusInput('chat-input');
          break;
        case 'marketplace':
          searchContainer.style.display = 'none';
          chatContainer.style.display = 'none';
          marketplaceContainer.style.display = 'block';
          jobsContainer.style.display = 'none';
          focusInput('marketplace-query');
          break;
        case 'jobs':
          searchContainer.style.display = 'none';
          chatContainer.style.display = 'none';
          marketplaceContainer.style.display = 'none';
          jobsContainer.style.display = 'block';
          focusInput('jobs-search-query');
          break;
        default:
          break;
      }
    });
  });

  // Function to focus the input field based on the container type
  function focusInput(inputId) {
    const input = document.getElementById(inputId);
    if (input) {
      input.focus();
    }
  }
});

// Function to toggle the drawer
function toggleDrawer() {
  const drawer = document.querySelector('.drawer');
  if (drawer.style.width === '0px' || !drawer.style.width) {
    drawer.style.width = '250px'; // Open the drawer
  } else {
    drawer.style.width = '0px'; // Close the drawer
  }
}

// Attach the function to your button
const button = document.querySelector('.container-button');
button.addEventListener('click', toggleDrawer);