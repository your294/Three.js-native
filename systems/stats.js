import Stats from 'stats.js';

const createStats = () => {
  const stats = new Stats();

  stats.showPanel(0);
  document.body.appendChild(stats.dom);

  return stats;
};

export { createStats };
