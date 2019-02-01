import React from "react";
import { connect } from "react-redux";

import FriendsList from "../components/FriendsList/FriendsList";

import { getFriends } from "../store/actions";

class FriendListView extends React.Component {

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    if (this.props.isFetching) {
      return <h2>Loading Friends ...</h2>;
    }
    return (
      <div>
        <FriendsList friends={this.props.friends} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    friends: state.friendsReducer.friends,
    isFetching: state.friendsReducer.fetching
  };
}

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendListView);
