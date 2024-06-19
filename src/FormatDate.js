export default function FormatDate(props) {
  let minutes = props.date.getMinutes();
  let hours = props.date.getHours();
  let day = props.date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}
