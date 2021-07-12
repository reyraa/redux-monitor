import React from 'react';

const pad = (num: number) =>
  num.toString().padStart(2, '0');

const getTimeDiff = (dateFuture: number, dateNow: number) => {
  let diffMil: number = Math.abs(dateFuture - dateNow) / 1000;

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
  timestamp: number,
  prevFrame?: number,
}

const Time: React.FC<Props> = ({
  prevFrame,
  timestamp,
}) => {
  const dateStr = (new Date()).toLocaleTimeString();
  return (
    <time dateTime={dateStr.replace(/\//g, '-')}>
      <span className="relative">
        {
          !prevFrame
            ? dateStr
            : getTimeDiff(timestamp, prevFrame)
        }
      </span>
      <span className="absolute">{dateStr}</span>
    </time>
  );
};

export default Time;
