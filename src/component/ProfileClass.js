import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
  }
  componentDidMount() {
    //here we did API calling
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Profile Class</h1>
        <h2>Name:{this.props.name}</h2>
        <h2>count:{count}</h2>
        <button onClick={() => this.setState({ count: 1 })}>SetState</button>
      </div>
    );
  }
}

export default Profile;
