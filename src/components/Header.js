import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../action/index";

export class Header extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }
    return <div className="ui header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.user.find(user => user.id === ownProps.userId) };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(Header);
