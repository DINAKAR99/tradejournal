import React, { useState } from "react";
import logg from "../images/trad-1.jpg";

// import "react-big-calendar/lib/sass/styles";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import moment from "moment";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";

export const TradePnl = () => {
  const events = [
    {
      title: "big meeting",
      allDay: true,
      start: new Date(2023, 11, 1),
      end: new Date(2023, 11, 1),
    },
  ];
  const [NewEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [AllEvents, setAllEvents] = useState(events);
  const locales = {
    "en-US": enUS,
  };
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  const router = (e) => {
    setCore(e.target.value);
  };

  const specialDates = ["2023-12-02", "2023-12-15"];
  const specialDates2 = ["2023-12-05", "2023-12-14"];
  const dayPropGetter = (date) => {
    const formattedDate = moment(date).format("YYYY-MM-DD");
    if (specialDates.includes(formattedDate)) {
      return {
        className: "custom-day", // Add a custom class for styling
        style: {
          backgroundColor: "lightgreen", // Set the background color for the specific date
        },
      };
    } else if (specialDates2.includes(formattedDate)) {
      return {
        className: "custom-day", // Add a custom class for styling
        style: {
          backgroundColor: "#FFCCCB", // Set the background color for the specific date
        },
      };
    }
  };

  return (
    <div style={{ paddingBottom: "50px", backgroundColor: "white" }}>
      <h1>P/L</h1>

      {/* <select onChange={router}>
      <option value="india">india</option>
      <option value="usa">usa</option>
      <option value="china">china</option>
    </select>

    <select>
    
    {
      options

      }
    </select> */}

      {/* <img src={logg} width={800}  alt="sss" /> */}
      <Calendar
        localizer={localizer}
        events={AllEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, width: 1500, margin: "auto" }}
        dayPropGetter={dayPropGetter}
      />
    </div>
  );
};
