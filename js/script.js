const ctx = document.getElementById('graphique').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'],
    datasets: [{
      label: 'Précipitations (mm)',
      data: [12.5, 8.2, 10.3, 7.1, 5.4],
      fill: true,
      borderColor: '#1E3A5F',
      backgroundColor: 'rgba(30, 58, 95, 0.1)',
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      }
    }
  }
});
