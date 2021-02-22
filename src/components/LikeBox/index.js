import React from 'react';
import CalculateBar from '../CalculateBar';

class LikeBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: new Date(),
      likes: 0,
      dislikes: 0,
      views: props.views ?? 0, // don't do it like this just use the prop directly
    };
    this.addLike = this.addLike.bind(this);
    this.addDislike = this.addDislike.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    console.log('%c[Initial Render] componentDidMount 💡', 'color: lime');
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.views !== prevProps.views) {
      // do something
    }
    console.log('%c[Update] componentDidUpdate 🔁', 'color: aqua');
  }

  //This method is not called for the initial render.
  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log('%c[Cleanup] componentWillUnmount🧹', 'color: tomato');
  }

  tick() {
    this.setState({
      timestamp: new Date(),
    });
  }

  addLike() {
    this.setState((prevState) => ({
      likes: prevState.likes + 1,
    }));
  }

  addDislike() {
    this.setState((prevState) => ({
      dislikes: prevState.dislikes + 1,
    }));
  }

  // calculateBar() {
  //   const likesP =
  //     (this.state.likes / (this.state.likes + this.state.dislikes)) * 100;
  //   return (
  //     <div style={{ width: '100%', height: '10px', backgroundColor: 'red' }}>
  //       <div
  //         style={{
  //           height: '10px',
  //           backgroundColor: 'green',
  //           width: likesP.toFixed(2) + '%',
  //         }}
  //       ></div>
  //     </div>
  //   );
  // }

  render() {
    return (
      <div>
        Display Views: {this.props.views > 99 ? this.props.views : 0}
        <hr />
        Likes/Dislikes: {this.state.likes}/{this.state.dislikes}
        <br />
        {/* {this.calculateBar()} */}
        <CalculateBar likes={this.state.likes} dislikes={this.state.dislikes} />
        <br />
        <button onClick={this.addLike}>Add Like</button>
        <button onClick={this.addDislike}>Add Dislike</button>
        <br />
        <span>{this.state.timestamp.toLocaleTimeString()}</span>
      </div>
    );
  }
}

export default LikeBox;
