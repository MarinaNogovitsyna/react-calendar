import React from "react";
import {
  getRussianDayOfWeek,
  getRussianMonth,
  getSpecialMohth,
} from "./inRussian";
import getCalendar from "./getCalendar";

export default function Calendar({ now }) {
  const calendar = getCalendar(now);
  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">
          {getRussianDayOfWeek(now)}
        </div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{now.getDate()}</div>
          <div className="ui-datepicker-material-month">
            {getSpecialMohth(now)}
          </div>
          <div className="ui-datepicker-material-year">{now.getFullYear()}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{getRussianMonth(now)}</span>
          &nbsp;
          <span className="ui-datepicker-year">{now.getFullYear()}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">
              Пн
            </th>
            <th scope="col" title="Вторник">
              Вт
            </th>
            <th scope="col" title="Среда">
              Ср
            </th>
            <th scope="col" title="Четверг">
              Чт
            </th>
            <th scope="col" title="Пятница">
              Пт
            </th>
            <th scope="col" title="Суббота">
              Сб
            </th>
            <th scope="col" title="Воскресенье">
              Вс
            </th>
          </tr>
        </thead>
        <tbody>
          {calendar.map((week) => {
            return (
              <tr key={calendar.indexOf(week)}>
                {week.map((el) => {
                  if (el === now.getDate()) {
                    return (
                      <td className="ui-datepicker-today" key={el}>
                        {el}
                      </td>
                    );
                  }
                  if (
                    (calendar.indexOf(week) === 0 && el > 20) ||
                    (calendar.indexOf(week) > 3 && el < 10)
                  ) {
                    return (
                      <td className="ui-datepicker-other-month" key={el}>
                        {el}
                      </td>
                    );
                  } else {
                    return <td key={el}>{el}</td>;
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
