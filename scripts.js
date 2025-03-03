AOS.init({ duration: 1000, once: true });

// Przełączanie trybu ciemnego/jasnego
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeToggle.querySelector('i').className = isDark ? 'fas fa-moon' : 'fas fa-sun';
    themeToggle.querySelector('span').textContent = isDark ? 'Tryb ciemny' : 'Tryb jasny';
});

// Interaktywny timeline - kliknięcie na element pokazuje dodatkowe szczegóły
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', () => {
        const details = item.getAttribute('data-details');
        if(details) {
            // Można zastąpić to modalem lub rozwijalnym panelem
            alert(details);
        }
    });
});

// Wykres językowy
const ctxLang = document.getElementById('language-chart').getContext('2d');
new Chart(ctxLang, {
    type: 'bar', // Typ wykresu zmieniony na słupkowy
    data: {
        labels: ['Polski', 'Angielski', 'Rosyjski'], // Etykiety języków
        datasets: [{
            label: 'Biegłość w językach',
            data: [100, 80, 30], // Procentowe wartości umiejętności w językach
            backgroundColor: ['#FF6B6B', '#4ECDC4', '#FFD700'], // Kolory dla każdego słupka
            borderColor: ['#FF6B6B', '#4ECDC4', '#FFD700'], // Obramowanie słupków
           
            borderWidth: 1
        }]
    },
    options: {
        responsive: true, // Wykres responsywny
        scales: {
            x: {
                beginAtZero: true, // Zaczynaj od 0 na osi X
                ticks: {
                    font: {
                        family: 'Roboto', // Czcionka na osi X
                        size: 14, // Rozmiar czcionki
                        weight: 'bold', // Grubość czcionki
                        lineHeight: 1.5 // Wysokość linii
                    }
                }
            },
            y: {
                max: 100, // Maksymalna wartość 100%
                beginAtZero: true, // Zaczynaj od 0 na osi Y
                ticks: {
                    font: {
                        family: 'Roboto', // Czcionka na osi Y
                        size: 14, // Rozmiar czcionki
                        weight: 'bold', // Grubość czcionki
                        lineHeight: 1.5 // Wysokość linii
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false, // Ukrycie legendy
                labels: {
                    font: {
                        family: 'Roboto', // Czcionka dla legendy
                        size: 14, // Rozmiar czcionki w legendzie
                        weight: 'bold' // Grubość czcionki
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        const labels = ['Polski (ojczysty)', 'Angielski (B2)', 'Rosyjski (A2)']; // Etykiety z poziomami
                        return labels[tooltipItem.dataIndex] + ': ' + tooltipItem.raw + '%';
                    }
                },
                titleFont: {
                    family: 'Roboto', // Czcionka dla tytułu tooltipa
                    size: 16, // Rozmiar czcionki
                    weight: 'bold'
                },
                bodyFont: {
                    family: 'Roboto', // Czcionka dla treści tooltipa
                    size: 14, // Rozmiar czcionki
                    weight: 'normal'
                }
            }
        }
    }
});


// Wykres umiejętności (bar)
const ctxSkills = document.getElementById('skills-chart').getContext('2d');
new Chart(ctxSkills, {
    type: 'bar',
    data: {
        labels: ['Java', 'HTML', 'JavaScript', 'Python', 'SQL', 'C++','CSS'],
        datasets: [{
            label: 'Poziom zaawansowania',
            data: [80, 70, 50, 75, 80, 60, 60],
            backgroundColor: ['#FF5722', '#D84B16', '#FFCD00', '#FFD43B', '#0093D1', '#003B5C', '#2965F1']
        }]
    },
    options: {
        scales: {
            x: {
                beginAtZero: true, // Zaczynaj od 0 na osi X
                ticks: {
                    font: {
                        family: 'Roboto', // Czcionka dla osi X
                        size: 16, // Rozmiar czcionki
                        weight: 'bold', // Grubość czcionki
                        lineHeight: 1.5 // Wysokość linii
                    }
                }
            },
            y: {
                beginAtZero: true, // Zaczynaj od 0 na osi Y
                max: 100,
                ticks: {
                    font: {
                        family: 'Roboto', // Czcionka dla osi Y
                        size: 14, // Rozmiar czcionki
                        weight: 'normal', // Grubość czcionki
                        lineHeight: 1.5 // Wysokość linii
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false // Ukrycie legendy
            }
        }
    }
});

