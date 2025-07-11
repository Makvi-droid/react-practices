function Games() {
  const games = [
    { id: 1, title: "Bloodborne", active: true },
    { id: 2, title: "Dark Souls", active: false },
    { id: 3, title: "Elden Ring", active: true },
  ];

  let gameList = games.filter(game => game.active).map(game => <li>{game.title}</li>);


  return (
    <>
      
        <ul>{gameList}</ul>
      
    </>
  );
}

export default Games;
