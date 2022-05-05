import React from 'react';

type Props = {
  clockName: number,
};

type State = {
  time: string
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  timerId: NodeJS.Timer = setInterval(() => { }, 0);

  componentDidMount() {
    this.timerId = setInterval((() => this.tick()), 1000);
  }

  componentDidUpdate(old: Props) {
    if (old.clockName !== this.props.clockName) {
    // eslint-disable-next-line
      console.log(`The Clock was renamed from ${old.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
    // eslint-disable-next-line
    console.log(this.state.time)
  }

  render() {
    return (
      <>
        {`name: ${this.props.clockName} `}
        |
        {` time: ${this.state.time}`}
      </>
    );
  }
}
