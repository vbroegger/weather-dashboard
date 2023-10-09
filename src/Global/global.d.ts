export interface WeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather_units: {
    time: string;
    temperature: string;
    windspeed: string;
    winddirection: string;
    is_day: string;
    weathercode: string;
  };
  current_weather_interval_seconds: number;
  current_weather: {
    time: string;
    temperature: number;
    windspeed: number;
    winddirection: number;
    is_day: number;
    weathercode: number;
  };
  hourly_units: {
    time: string;
    temperature_2m: string;
    relativehumidity_2m: string;
    uv_index: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    relativehumidity_2m: number[];
    uv_index: number[];
  };
  daily_units: {
    time: string;
    weathercode: string;
  };
  daily: {
    time: string[];
    weathercode: number[];
		temperature_2m_max: number[];
  };
}
