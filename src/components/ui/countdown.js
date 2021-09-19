import ReactCountdown from 'react-countdown';

import BrandText from './brand-text.js';

const Countdown = ({date}) => (
  <ReactCountdown date={date} renderer={renderer} />
);

const renderer = ({days, hours, minutes, seconds, completed}) => {
  if (completed) {
    return null;
  }

  const dateString = `${days}D:${hours}H:${minutes}M:${seconds}S`;
  return (
    <BrandText
      color="text.muted"
      text={`Resurrection in ${dateString}`}
      textAlign="center"
    />
  );
};

export default Countdown;
