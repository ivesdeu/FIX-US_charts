const ENDPOINT =
  "https://api.open-meteo.com/v1/forecast?latitude=43.0389&longitude=-87.9065&current_weather=true&temperature_unit=fahrenheit";

function conditionLabel(code: number): string {
  if (code === 0) return "Clear";
  if (code <= 3) return "Partly cloudy";
  if (code <= 48) return "Foggy";
  if (code <= 57) return "Drizzle";
  if (code <= 67) return "Rain";
  if (code <= 77) return "Snow";
  if (code <= 82) return "Showers";
  if (code <= 86) return "Snow showers";
  if (code <= 99) return "Thunderstorm";
  return "Clear";
}

export type Weather = {
  temperature: number;
  condition: string;
};

export async function fetchWeather(): Promise<Weather | null> {
  try {
    const res = await fetch(ENDPOINT);
    if (!res.ok) return null;
    const data = await res.json();
    const { temperature, weathercode } = data.current_weather;
    return {
      temperature: Math.round(temperature),
      condition: conditionLabel(weathercode),
    };
  } catch {
    return null;
  }
}

export async function fetchTemperature(): Promise<number | null> {
  const weather = await fetchWeather();
  return weather?.temperature ?? null;
}
