// Dados mock para testar o app quando a API não estiver disponível

export const mockCharacters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    url: "https://swapi.dev/api/people/1/"
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
    url: "https://swapi.dev/api/people/4/"
  },
  {
    name: "Princess Leia",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
    url: "https://swapi.dev/api/people/5/"
  },
  {
    name: "Han Solo",
    height: "180",
    mass: "80",
    hair_color: "brown",
    skin_color: "fair",
    eye_color: "brown",
    birth_year: "29BBY",
    gender: "male",
    url: "https://swapi.dev/api/people/14/"
  },
  {
    name: "Chewbacca",
    height: "228",
    mass: "112",
    hair_color: "brown",
    skin_color: "unknown",
    eye_color: "blue",
    birth_year: "200BBY",
    gender: "male",
    url: "https://swapi.dev/api/people/13/"
  }
];

export const mockFilms = [
  {
    title: "Star Wars: Episódio I - A Ameaça Fantasma",
    episode_id: 1,
    opening_crawl: "Turmoil has engulfed the Galactic Republic...",
    director: "George Lucas",
    producer: "Rick McCallum",
    release_date: "1999-05-19",
    url: "https://swapi.dev/api/films/1/"
  },
  {
    title: "Star Wars: Episódio II - Ataque dos Clones",
    episode_id: 2,
    opening_crawl: "There is unrest in the Galactic Senate...",
    director: "George Lucas",
    producer: "Rick McCallum",
    release_date: "2002-05-16",
    url: "https://swapi.dev/api/films/2/"
  },
  {
    title: "Star Wars: Episódio III - A Vingança dos Sith",
    episode_id: 3,
    opening_crawl: "War! The Republic is crumbling under attacks...",
    director: "George Lucas",
    producer: "Rick McCallum",
    release_date: "2005-05-19",
    url: "https://swapi.dev/api/films/3/"
  },
  {
    title: "Star Wars: Episódio IV - Uma Nova Esperança",
    episode_id: 4,
    opening_crawl: "It is a period of civil war...",
    director: "George Lucas",
    producer: "Gary Kurtz, Rick McCallum",
    release_date: "1977-05-25",
    url: "https://swapi.dev/api/films/4/"
  },
  {
    title: "Star Wars: Episódio V - O Império Contra-Ataca",
    episode_id: 5,
    opening_crawl: "It is a dark time for the Rebellion...",
    director: "Irvin Kershner",
    producer: "Gary Kurtz, Rick McCallum",
    release_date: "1980-05-21",
    url: "https://swapi.dev/api/films/5/"
  },
  {
    title: "Star Wars: Episódio VI - O Retorno de Jedi",
    episode_id: 6,
    opening_crawl: "Luke Skywalker has returned to his home planet...",
    director: "Richard Marquand",
    producer: "Howard G. Kazanjian, George Lucas, Rick McCallum",
    release_date: "1983-05-25",
    url: "https://swapi.dev/api/films/6/"
  },
  {
    title: "Star Wars: Episódio VII - O Despertar da Força",
    episode_id: 7,
    opening_crawl: "Luke Skywalker has vanished...",
    director: "J.J. Abrams",
    producer: "Kathleen Kennedy, J.J. Abrams, Bryan Burk",
    release_date: "2015-12-18",
    url: "https://swapi.dev/api/films/7/"
  },
  {
    title: "Star Wars: Episódio VIII - Os Últimos Jedi",
    episode_id: 8,
    opening_crawl: "The FIRST ORDER reigns...",
    director: "Rian Johnson",
    producer: "Kathleen Kennedy, Ram Bergman",
    release_date: "2017-12-15",
    url: "https://swapi.dev/api/films/8/"
  },
  {
    title: "Star Wars: Episódio IX - A Ascensão Skywalker",
    episode_id: 9,
    opening_crawl: "The dead speak! The galaxy has heard...",
    director: "J.J. Abrams",
    producer: "Kathleen Kennedy, J.J. Abrams, Michelle Rejwan",
    release_date: "2019-12-20",
    url: "https://swapi.dev/api/films/9/"
  },
  {
    title: "Rogue One: Uma História Star Wars",
    episode_id: null,
    opening_crawl: "It is a period of civil war...",
    director: "Gareth Edwards",
    producer: "Simon Emanuel, Kathleen Kennedy, Allison Shearmur",
    release_date: "2016-12-16",
    url: "https://swapi.dev/api/films/10/"
  },
  {
    title: "Han Solo: Uma História Star Wars",
    episode_id: null,
    opening_crawl: "It is a lawless time...",
    director: "Ron Howard",
    producer: "Kathleen Kennedy, Simon Emanuel, Allison Shearmur",
    release_date: "2018-05-25",
    url: "https://swapi.dev/api/films/11/"
  }
];

export const mockPlanets = [
  {
    name: "Tatooine",
    rotation_period: "23",
    orbital_period: "304",
    diameter: "10465",
    climate: "arid",
    gravity: "1 standard",
    terrain: "desert",
    surface_water: "1",
    population: "200000",
    url: "https://swapi.dev/api/planets/1/"
  },
  {
    name: "Alderaan",
    rotation_period: "24",
    orbital_period: "364",
    diameter: "12500",
    climate: "temperate",
    gravity: "1 standard",
    terrain: "grasslands, mountains",
    surface_water: "40",
    population: "2000000000",
    url: "https://swapi.dev/api/planets/2/"
  },
  {
    name: "Hoth",
    rotation_period: "23",
    orbital_period: "549",
    diameter: "7200",
    climate: "frozen",
    gravity: "1.1 standard",
    terrain: "tundra, ice caves, mountain ranges",
    surface_water: "100",
    population: "unknown",
    url: "https://swapi.dev/api/planets/4/"
  }
];

export const mockStarships = [
  {
    name: "Millennium Falcon",
    model: "YT-1300 light freighter",
    manufacturer: "Corellian Engineering Corporation",
    cost_in_credits: "100000",
    length: "34.37",
    max_atmosphering_speed: "1050",
    crew: "4",
    passengers: "6",
    cargo_capacity: "100000",
    consumables: "2 months",
    hyperdrive_rating: "0.5",
    MGLT: "75",
    starship_class: "Light freighter",
    url: "https://swapi.dev/api/starships/10/"
  },
  {
    name: "X-wing",
    model: "T-65 X-wing",
    manufacturer: "Incom Corporation",
    cost_in_credits: "149999",
    length: "12.5",
    max_atmosphering_speed: "1050",
    crew: "1",
    passengers: "0",
    cargo_capacity: "110",
    consumables: "1 week",
    hyperdrive_rating: "1.0",
    MGLT: "100",
    starship_class: "Starfighter",
    url: "https://swapi.dev/api/starships/12/"
  }
];

export const mockVehicles = [
  {
    name: "Sand Crawler",
    model: "Digger Crawler",
    manufacturer: "Corellia Mining Corporation",
    cost_in_credits: "150000",
    length: "36.8",
    max_atmosphering_speed: "30",
    crew: "46",
    passengers: "30",
    cargo_capacity: "50000",
    consumables: "2 months",
    vehicle_class: "wheeled",
    url: "https://swapi.dev/api/vehicles/4/"
  },
  {
    name: "T-16 skyhopper",
    model: "T-16 skyhopper",
    manufacturer: "Incom Corporation",
    cost_in_credits: "14500",
    length: "10.4",
    max_atmosphering_speed: "1200",
    crew: "1",
    passengers: "1",
    cargo_capacity: "50",
    consumables: "0",
    vehicle_class: "repulsorcraft",
    url: "https://swapi.dev/api/vehicles/6/"
  }
];

export const mockSpecies = [
  {
    name: "Human",
    classification: "mammal",
    designation: "sentient",
    average_height: "180",
    skin_colors: "caucasian, black, asian, hispanic",
    hair_colors: "blonde, brown, black, red",
    eye_colors: "brown, blue, green, hazel, grey, amber",
    average_lifespan: "120",
    homeworld: "https://swapi.dev/api/planets/9/",
    language: "Galactic Basic",
    url: "https://swapi.dev/api/species/1/"
  },
  {
    name: "Wookiee",
    classification: "mammal",
    designation: "sentient",
    average_height: "210",
    skin_colors: "gray",
    hair_colors: "black, brown",
    eye_colors: "blue, green, yellow, brown, golden, red",
    average_lifespan: "400",
    homeworld: "https://swapi.dev/api/planets/14/",
    language: "Shyriiwook",
    url: "https://swapi.dev/api/species/3/"
  }
];
