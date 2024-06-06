const GITHUB_USERNAME = 'belicks1999'; // Replace with your GitHub username

export async function fetchRepositories() {
  const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
  if (!response.ok) {
    throw new Error('Failed to fetch repositories');
  }
  return response.json();
}
