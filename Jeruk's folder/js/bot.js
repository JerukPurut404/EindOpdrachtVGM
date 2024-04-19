function displayGitHubDataYing(data) {
  const followersElement = document.getElementById('followers-ying');
  followersElement.innerHTML = data.followers;
  const followingElement = document.getElementById('following-ying');
  followingElement.innerHTML = data.following;
  const CreatedAtElement = document.getElementById('created-at-ying');
  CreatedAtElement.innerHTML = data.created_at;
  const PublicReposElement = document.getElementById('public-repos-ying');
  PublicReposElement.innerHTML = data.public_repos;
}
function displayRepositoryListYing(data) {
  const repoListElement = document.getElementById('repo-list-ying');
  for (const repo of data) {
    const li = document.createElement('li');
    li.innerHTML = repo.name;
    repoListElement.appendChild(li);
  }
}
function displayGitHubDataJP(data) {
  const followersElement = document.getElementById('followers-JP');
  followersElement.innerHTML = data.followers;
  const followingElement = document.getElementById('following-JP');
  followingElement.innerHTML = data.following;
  const CreatedAtElement = document.getElementById('created-at-JP');
  CreatedAtElement.innerHTML = data.created_at;
  const PublicReposElement = document.getElementById('public-repos-JP');
  PublicReposElement.innerHTML = data.public_repos;
}
function displayRepositoryListJP(data) {
  const repoListElement = document.getElementById('repo-list-JP');
  for (const repo of data) {
    const li = document.createElement('li');
    li.innerHTML = repo.name;
    repoListElement.appendChild(li);
  }
}

fetch('https://api.github.com/users/ying2406')
  .then(response => response.json())
  .then(displayGitHubDataYing);

fetch('https://api.github.com/users/ying2406/repos')
  .then(response => response.json())
  .then(displayRepositoryListYing);

fetch('https://api.github.com/users/JerukPurut404')
  .then(response => response.json())
  .then(displayGitHubDataJP);

fetch('https://api.github.com/users/JerukPurut404/repos')
  .then(response => response.json())
  .then(displayRepositoryListJP);
