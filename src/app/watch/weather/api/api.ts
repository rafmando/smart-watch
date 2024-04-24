interface Options {
  method: string;
  headers: { [key: string]: string };
}

export const fetchCurrentWeather = async (lat: string, lon: string) => {
  const url: string = `https://ai-weather-by-meteosource.p.rapidapi.com/current?lat=${lat}&lon=${lon}&timezone=auto&language=en&units=auto`;
  const options: Options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "45f7fb0c65msh3a483d4cc1b5e22p160705jsn92563174ff63",
      "X-RapidAPI-Host": "ai-weather-by-meteosource.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
