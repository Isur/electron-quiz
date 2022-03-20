export default (array) => {
  const shuffle = [...array];
  for (let i = shuffle.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
  }
  return shuffle;
};
