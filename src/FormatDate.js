export default function FormatDate(props) {
  let showTime = props.showTime;
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

  let formattedDay = days[day];

  if (showTime) {
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    if (hours < 10) {
      hours = `0${hours}`;
    }

    return `${formattedDay} ${hours}:${minutes}`;
  } else {
    return `${formattedDay} `;
  }
}
