document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // Activer iCheck (Remplacé par un simple style pour les checkboxes)
  document.querySelectorAll('input[type="checkbox"]').forEach(el => {
    el.classList.add('icheckbox_flat-blue');
  });

  // Rendre les widgets du dashboard triables (Utilisation de SortableJS)
  if (typeof Sortable !== 'undefined') {
    document.querySelectorAll(".connectedSortable").forEach(el => {
      new Sortable(el, {
        group: "connectedSortable",
        handle: ".box-header, .nav-tabs",
        animation: 150,
      });
    });
  }

  // Rendre la liste de tâches triable
  document.querySelectorAll(".todo-list").forEach(el => {
    new Sortable(el, {
      handle: ".handle",
      animation: 150,
    });
  });

  // Activer les datepickers (Assurez-vous que daterangepicker est bien inclus)
  if (typeof daterangepicker !== 'undefined') {
    document.querySelectorAll('.daterange').forEach(el => {
      new daterangepicker(el, {
        ranges: {
          'Today': [moment(), moment()],
          'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
          'Last 7 Days': [moment().subtract(6, 'days'), moment()],
          'Last 30 Days': [moment().subtract(29, 'days'), moment()],
          'This Month': [moment().startOf('month'), moment().endOf('month')],
          'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        startDate: moment().subtract(29, 'days'),
        endDate: moment()
      }, function (start, end) {
        alert("You chose: " + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
      });
    });
  }

  // Activer jVectorMap (Si présent)
  if (typeof jQuery !== 'undefined' && typeof jQuery.fn.vectorMap !== 'undefined') {
    var visitorsData = {
      "US": 398, "SA": 400, "CA": 1000, "DE": 500, "FR": 760,
      "CN": 300, "AU": 700, "BR": 600, "IN": 800, "GB": 320, "RU": 3000
    };

    $('#world-map').vectorMap({
      map: 'world_mill_en',
      backgroundColor: "transparent",
      regionStyle: { initial: { fill: '#e4e4e4' } },
      series: {
        regions: [{ values: visitorsData, scale: ["#92c1dc", "#ebf4f9"], normalizeFunction: 'polynomial' }]
      },
      onRegionLabelShow: function (e, el, code) {
        if (visitorsData[code]) el.html(el.html() + ': ' + visitorsData[code] + ' new visitors');
      }
    });
  }

  // Activer Morris.js Charts (Si présent)
  if (typeof Morris !== 'undefined') {
    new Morris.Area({
      element: 'revenue-chart',
      data: [{ y: '2011 Q1', item1: 2666, item2: 2666 }, { y: '2011 Q2', item1: 2778, item2: 2294 }],
      xkey: 'y',
      ykeys: ['item1', 'item2'],
      labels: ['Item 1', 'Item 2'],
      lineColors: ['#a0d0e0', '#3c8dbc'],
      hideHover: 'auto'
    });
  }

  // Activer le calendrier (Datepicker Bootstrap)
  if (typeof $ !== 'undefined' && typeof $.fn.datepicker !== 'undefined') {
    $("#calendar").datepicker();
  }

  // Activer slimScroll pour le chat-box (Si slimScroll est chargé)
  if (typeof jQuery !== 'undefined' && typeof jQuery.fn.slimScroll !== 'undefined') {
    $('#chat-box').slimScroll({ height: '250px' });
  }

  // Activer les graphiques en donuts avec Morris.js
  if (typeof Morris !== 'undefined') {
    new Morris.Donut({
      element: 'sales-chart',
      data: [{ label: "Download Sales", value: 12 }, { label: "In-Store Sales", value: 30 }],
      colors: ["#3c8dbc", "#f56954", "#00a65a"],
      hideHover: 'auto'
    });
  }
});
