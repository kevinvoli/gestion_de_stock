'use strict';

document.addEventListener("DOMContentLoaded", function () {
  // Toggle direct chat contact pane
  document.querySelectorAll("[data-widget='chat-pane-toggle']").forEach(button => {
    button.addEventListener("click", function () {
      document.getElementById("myDirectChat").classList.toggle("direct-chat-contacts-open");
    });
  });

  // Monthly Sales Chart
  var salesChartCanvas = document.getElementById("salesChart").getContext("2d");
  var salesChart = new Chart(salesChartCanvas, {
    type: 'line',
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Electronics",
          backgroundColor: "rgb(210, 214, 222)",
          borderColor: "rgb(210, 214, 222)",
          pointBackgroundColor: "rgb(210, 214, 222)",
          pointBorderColor: "#c1c7d1",
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: "Digital Goods",
          backgroundColor: "rgba(60,141,188,0.9)",
          borderColor: "rgba(60,141,188,0.8)",
          pointBackgroundColor: "#3b8bba",
          pointBorderColor: "rgba(60,141,188,1)",
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { grid: { display: false } },
        y: { grid: { display: false } }
      }
    }
  });

  // Pie Chart
  var pieChartCanvas = document.getElementById("pieChart").getContext("2d");
  new Chart(pieChartCanvas, {
    type: 'doughnut',
    data: {
      labels: ["Chrome", "IE", "FireFox", "Safari", "Opera", "Navigator"],
      datasets: [{
        data: [700, 500, 400, 600, 300, 100],
        backgroundColor: ["#f56954", "#00a65a", "#f39c12", "#00c0ef", "#3c8dbc", "#d2d6de"]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });

  // World Map Markers (Assuming vectorMap is properly loaded)
  if (document.getElementById('world-map-markers')) {
    new jsVectorMap({
      selector: "#world-map-markers",
      map: "world_mill_en",
      markers: [
        { coords: [41.90, 12.45], name: "Vatican City" },
        { coords: [43.73, 7.41], name: "Monaco" },
        { coords: [-0.52, 166.93], name: "Nauru" }
      ]
    });
  }
});
