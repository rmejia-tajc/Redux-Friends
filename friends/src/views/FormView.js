import React from 'react';
import { connect } from 'react-redux';

import { addFriend } from '../store/actions';

import Form from '../components/Form/Form';

function FormView(props) {
  return <Form {...props} />;
}

export default connect(
  null,
  { addFriend }
)(FormView);
