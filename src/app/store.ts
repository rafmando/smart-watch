import { create } from "zustand";

interface PreceptionProps {
  total: number;
  type: string;
}

interface WindProps {
  speed: number;
  gusts: number;
  angle: number;
  dir: string;
}
interface CurrentProps {
  icon: string;
  icon_num: number;
  summary: string;
  temperature: number;
  feels_like: number;
  wind_chill: number;
  dew_point: number;
  wind: WindProps;
  precipitation: PreceptionProps;
  cloud_cover: number;
  ozone: number;
  pressure: number;
  uv_index: number;
  humidity: number;
  visibility: number;
}
interface WeatherProps {
  lat: string;
  lon: string;
  elevation: number;
  timezone: string;
  units: string;
  current: CurrentProps;
}

interface WeatherState {
  weatherData: WeatherProps | {};
  getWeatherResult: (lat: string, lon: string) => void;
}

export const useWeatherStore = create<WeatherState>()((set) => ({
  weatherData: {},
  getWeatherResult: async (lat: string, lon: string) => {
    const url: string = `https://ai-weather-by-meteosource.p.rapidapi.com/current?lat=${lat}&lon=${lon}&timezone=auto&language=en&units=auto`;
    const options: any = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "45f7fb0c65msh3a483d4cc1b5e22p160705jsn92563174ff63",
        "X-RapidAPI-Host": "ai-weather-by-meteosource.p.rapidapi.com",
      },
    };
    const res = await fetch(url, options);
    set({ weatherData: await res.json() });
  },
}));
