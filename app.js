var csvUrl = "https://raw.githubusercontent.com/Peleke/geo-plots/master/wolf_number_year.csv";
Plotly.d3.csv(csvUrl, function(err, data) {
  function unpack(rows, key) {
    return rows.map(row => row[key]);
  }

  // @Objective
  function lag(data, tau = 1) {
    if (tau >= data.length) {
      return [];
    } else {
      return data.slice(tau);
    }
  }

  // @Objective
  var year = unpack(data, "year");
  var wolfNumber = unpack(data, "wolf_number");
  var wolfNumberLag = lag(wolfNumber, 1);

  // @Objective
  var data = [{
    x: year,
    y: wolfNumber,
    mode: "markers",
    type: "scatter"
  }];

  // @Objective
  var lag =[{
    x: wolfNumber,
    y: wolfNumberLag,
    mode: "markers",
    type: "scatter"
  }];

  // @Objective
  var dataLayout = {
    title: "Wolf Number vs Year"
  };

  // @Objective
  var lagLayout = {
    title: "Wolf Number Lag (τ=1)"
  };

  // @Objective
  Plotly.plot("wolf-number-scatter", data, dataLayout);
  Plotly.plot("wolf-number-lag", lag, lagLayout);
});
