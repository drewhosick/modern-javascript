const key = 'VRMoAKnp8oMF80fIjwLfAwg3MYoLDBRW';

// get weather info
const getWeather = async (locId) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${locId}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

// get city info
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

