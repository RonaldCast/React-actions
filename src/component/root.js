import React, { Component } from "react";
import { connect } from "react-redux";
import { action1 } from "../redux/actions";

class Root extends Component {
  state = {};

  componentWillMount() {
    this.props.action1();
  }
  render() {
    console.log(this.props);
    return <div>Root</div>;
  }
}

const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = {
  action1
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
