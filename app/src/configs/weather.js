const weatherURL = (lat, lon) =>
  `http://www.7timer.info/bin/civil.php?lon=${lon}&lat=${lat}&ac=0&unit=metric&output=json&tzshift=0`;

export { weatherURL };
