import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
    };
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h3>Current Count: {count}</h3>
      </div>
    );
  }

  componentDidMount() {
    const { startCount } = this.props;
    this.setState({
      count: startCount,
    });
    this.myInterval = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
    }, 1000);
    if (this.state.count === 0) {
      alert("done");
    }
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
}

export default Timer;

// import React, { useEffect, useState } from "react";
// import { useHistory } from "react";

// const Timer = () => {
//   const [seconds, setSeconds] = useState(10);
//   const history = useHistory();

//   useEffect(() => {
//     const interval = setInterval(
//       () => setSeconds((prevTimer) => prevTimer - 1),
//       1000,
//     );
//     if (seconds === 0) {
//       return () => clearInterval(interval);
//     }
//   }, []);
//   return <div className="countdown">{seconds}</div>;
// };

// export default Timer;
