import Cloud from "./Cloud";
import Moon from "./Moon";
import Rain from "./Rain";
import Snow from "./Snow";
import Sun from "./Sun";
import Thunder from "./Thunder";

export default function WeatherIcon({iconCode}) {
  //   const iconMap = {
  //     "01d": "☀️", // Clear sky (day)
  //     "01n": "🌑", // Clear sky (night)
  //     "02d": "🌤️", // Few clouds (day)
  //     "02n": "🌑☁️", // Few clouds (night)
  //     "03d": "☁️", // Scattered clouds
  //     "03n": "☁️",
  //     "09d": "🌧️", // Shower rain
  //     "09n": "🌧️",
  //     "10d": "🌦️", // Rain
  //     "10n": "🌧️🌙",
  //     "11d": "⛈️", // Thunderstorm
  //     "11n": "⛈️",
  //     "13d": "❄️", // Snow
  //     "13n": "❄️",
  //     "50d": "🌫️", // Mist
  //     "50n": "🌫️",
  //   };
  const iconMap = {
    "01d": <Sun></Sun>, // Clear sky (day)
    "01n": <Moon></Moon>, // Clear sky (night)
    "02d": <Cloud></Cloud>, // Few clouds (day)
    "02n": <Cloud></Cloud>, // Few clouds (night)
    "03d": <Cloud></Cloud>, // Scattered clouds
    "03n": <Cloud></Cloud>,
    "09d": <Rain></Rain>, // Shower rain
    "09n": <Rain></Rain>,
    "10d": <Rain></Rain>, // Rain
    "10n": <Rain></Rain>,
    "11d": <Thunder></Thunder>, // Thunderstorm
    "11n": <Thunder></Thunder>,
    "13d": <Snow></Snow>, // Snow
    "13n": <Snow></Snow>,
    "50d": <Cloud></Cloud>, // Mist
    "50n": <Cloud></Cloud>,
  };
  return iconMap[iconCode] || <Sun></Sun>;
}
