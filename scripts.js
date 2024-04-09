var ctx = document.getElementById("skillChart").getContext("2d");
var skills = [
    {name: "Core java", value: 90},
    {name: "Springboot", value: 80},
    {name: "MySQL", value: 70},
    {name: "C/C++", value: 90},
    {name: "HTML/CSS", value: 80},
    {name: "Javascript", value: 40},
    {name: "DSA", value: 80}
];

var skillChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: skills.map(skill => skill.name),
        datasets: [{
            label: "Skills",
            data: skills.map(skill => skill.value),
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 99, 132, 0.2)"
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 99, 132, 1)"
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
    }
});
skillChart.render();