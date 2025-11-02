
      const cards = document.querySelector(".container");

      const data = fetch("https://api.coinpaprika.com/v1/tickers/")
        .then((res) => res.json())
        .then((data) => data);
      console.log(data);
      data.then((data) => {
        data.splice(0,8).forEach((coin) => {
          const card = document.createElement("div");
          card.className = "card";
          card.innerHTML = `
            <h2>${coin.name} (${coin.symbol})</h2>
            <p>Price: $${coin.quotes.USD.price.toFixed(2)}</p>
            <a href=${`https://en.wikipedia.org/wiki/${coin.name}`} target="_blank"><button>Know history</button></a>
        `;
          cards.appendChild(card);
        });
      });
    