/*
 * Return a (shallow) copy of 'games' containing their platform details.
 */
export default (games, platforms) => {
  // Turn the platforms into a map
  const indexedPlatforms = new Map(platforms.map((platform) => [platform.id, platform]));
  const gamesWithPlatforms = [];

  games.forEach((game) => {
    const gamePlatforms = [];

    // Replace platform all platform ids by their corresponding details
    game.platforms.forEach((gamePlatform) => {
      const platform = indexedPlatforms.get(gamePlatform);

      if (platform) {
        gamePlatforms.push(platform);
      }
    });

    gamesWithPlatforms.push({ ...game, platforms: gamePlatforms });
  });

  return gamesWithPlatforms;
};
