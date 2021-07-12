import React from 'react';

const pad = (num: number) =>
  num.toString().padStart(2, '0');

const getTimeDiff = (dateFuture: Date, dateNow: Date) => {
  let diffMil: number = Math.abs(dateFuture.getTime() - dateNow.getTime()) / 1000;

  // calculate days
  const days = Math.floor(diffMil / 86400);
  diffMil -= days * 86400;

  // calculate hours
  const hours = Math.floor(diffMil / 3600) % 24;
  diffMil -= hours * 3600;

  // calculate minutes
  const minutes = Math.floor(diffMil / 60) % 60;
  diffMil -= minutes * 60;

  if (days > 0) {
    return `+ ${days}:${pad(hours)}:${pad(minutes)}:${pad(diffMil)}`;
  }
  return `+ ${pad(hours)}:${pad(minutes)}:${pad(diffMil)}`;
}

type Props = {
  date: Date,
  prevDate?: Date,
}

const Time: React.FC<Props> = ({
  prevDate,
  date,
}) => (
  <time dateTime={date.toLocaleTimeString().replace(/\//g, '-')}>
    <span className="relative">
      {
        !prevDate
          ? date.toLocaleTimeString()
          : getTimeDiff(date, prevDate)
      }
    </span>
    <span className="absolute">{date.toLocaleTimeString()}</span>
  </time>
);

export default Time;
