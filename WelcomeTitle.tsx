import * as React from 'react';

export function Preview() {
  return <WelcomeTitle user="T" primary />;
}

interface IWelcomeTitleProps {
  user?: string;
  primary?: boolean;
}

function WelcomeTitle(props: IWelcomeTitleProps) {
  const { user, primary } = props;
  const label = `Welcome${user ? ' ' + user + '!' : '!'} `;
  if (primary) return <h1>{label}</h1>;
  else return <h2>{label}</h2>;
}

export default WelcomeTitle;
