function getWeather() {
      const city = document.getElementById("citySelect").value;
      document.getElementById("cityName").textContent = city;

      fetch(`https://wttr.in/${city}?format=3`)
        .then(response => response.text())
        .then(data => {
          document.getElementById('weather').textContent = data;
        })
        .catch(() => {
          document.getElementById('weather').textContent = "Failed to load weather 🌧️";
        });
    }

    // Load default city on page load
    window.onload = getWeather;