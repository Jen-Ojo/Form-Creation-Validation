// As instructed: define an async function named fetchUserData
async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = document.getElementById('api-data');

  try {
    // Show loading message (in case container was empty)
    dataContainer.textContent = 'Loading user data…';

    // fetch and parse JSON
    const response = await fetch(apiUrl);

    // Basic check for HTTP errors
    if (!response.ok) {
      throw new Error(`Network response was not ok (status ${response.status})`);
    }

    const users = await response.json();

    // Clear the loading message
    dataContainer.innerHTML = '';

    // Create and populate a <ul> with user names
    const userList = document.createElement('ul');

    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name; // the user's name
      userList.appendChild(li);
    });

    // Append the list to the container
    dataContainer.appendChild(userList);

  } catch (error) {
    // Clear any content and show a friendly error message
    dataContainer.innerHTML = '';
    dataContainer.classList.add('error'); // optional styling
    dataContainer.textContent = 'Failed to load user data.';
    // Log the actual error to the console to help debugging
    console.error('fetchUserData error:', error);
  }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  fetchUserData();
});
