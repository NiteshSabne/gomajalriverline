var config = {
    style: 'mapbox://styles/gomajal/cl14j9o8y000o14sdhx2iemdd',
    accessToken: 'pk.eyJ1IjoiZ29tYWphbCIsImEiOiJja3p3ajh0NGMwaDR2MnFsbHFqZmx4NzRlIn0.RMKwE-cRfIx0FHd4ez0m8Q',
    showMarkers: false,
    theme: 'light',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'phl',
            alignment: 'right',
            title: 'The Manjara River Of Latur',
            image: '',
            description: 'View One',
            location: {
                center: [76.148, 18.577],
                zoom: 10.52,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'phl-city-limits',
                    opacity: .45
                }
            ],
            onChapterExit: [
                {
                    layer: 'phl-city-limits',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Latur',
            alignment: 'right',
            title: 'The River Is Going Throw',
            image: '',
            description: 'View TWO',
            location: {
                center: [76.573, 18.461],
                zoom: 10.00,
                pitch: 55.50,
                bearing: 70.20
            },
            onChapterEnter: [
                {
                    layer: 'phl-bike-network',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'indego',
            alignment: 'right',
            title: 'The River Cross Accross',
            image: '',
            description: 'View Three',
            location: {
                center: [76.988, 18.178],
                zoom: 8.90,
                pitch: 60.00,
                bearing: 100.80
            },
            onChapterEnter: [
                {
                    layer: 'indego-stations',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'indego-stations',
                    opacity: 0
                }
            ]
        },
        {
            id: 'belmont',
            alignment: 'right',
            title: 'And Goes All The Way to Bidar',
            image: '',
            description: 'View Four',
            location: {
                center: [78.035, 17.739],
                zoom: 9.90,
                pitch: 44.00,
                bearing: 40.00
            },
            onChapterEnter: [
                {
                    layer: 'belmont',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'belmont',
                    opacity: 0
                }
            ]
        },
        {
            id: 'wiss',
            alignment: 'right',
            title: 'Right Next To Godavari River',
            image: '',
            description: 'View Five',
            location: {
                center: [77.935, 18.452],
                zoom: 8.75,
                pitch: 47.50,
                bearing: -30.80
            },
            onChapterEnter: [
                {
                    layer: 'wissahickon',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'wissahickon',
                    opacity: 0
                }
            ]
        },
        {
            id: 'pennypack',
            alignment: 'right',
            title: 'All Along To Dharmabad',
            image: '',
            description: 'Final The End',
            location: {
                center: [78.025, 18.870],
                zoom: 9.72,
                pitch: 43.50,
                bearing: -96.80
            },
            onChapterEnter: [
                {
                    layer: 'pennypack',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pennypack',
                    opacity: 0
                }
            ]
        }
    ]
};
