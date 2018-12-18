export const getProp = (obj, keys, defaultValue = null) => {
  const objectKeys = keys.split(".");
  const allKeys = objectKeys.reduce((acc, key) => {
    const match = key.match(/\[\d\]$/);
    if (match) {
      const propName = key.slice(0, match.index);
      propName && acc.push(propName);
      const index = +key.slice(match.index + 1, key.length - 1);
      acc.push(index);
    } else {
      acc.push(key);
    }

    return acc;
  }, []);

  const result = allKeys.reduce((acc, cur) => {
    return acc === null || acc === undefined ? acc : acc[cur];
  }, obj);

  return result !== undefined && result !== null ? result : defaultValue;
};

export const shuffleArray = array => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
