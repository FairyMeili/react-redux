import React, { Component } from "react";
import { connect } from "react-redux";
class ReactRedux extends Component {
  add = () => {
    this.props.dispatch({
      type: "add"
    });
  };
  minus = () => {
    this.props.dispatch({
      type: "minus"
    });
  };
  asyncAdd = () => {
    setTimeout(() => {
      this.props.dispatch({
        type: "asyncAdd"
      });
    }, 2000);
  };
  render() {
    return (
      <>
        <button onClick={this.add}>+</button>
        <span>reactredux{this.props.conter}</span>
        <button onClick={this.minus}>-</button>

        <button onClick={this.asyncAdd}>asyncAdd</button>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    conter: state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReactRedux);
