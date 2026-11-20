(() => {
  const config = window.PORTFOLIO_CONFIG || {};
  const username = String(config.githubUsername || '').trim();
  const valid = /^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,37}[a-zA-Z0-9])?$/.test(username)
    && username !== 'YOUR_GITHUB_USERNAME';

  document.querySelectorAll('[data-github-link]').forEach(link => {
    if (valid) {
      link.href = `https://github.com/${username}`;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    } else {
      link.href = '#setup';
      link.title = 'GitHub 사용자 이름을 먼저 설정하세요';
    }
  });
  const notice = document.getElementById('setup');
  if (notice) notice.hidden = valid;
})();
