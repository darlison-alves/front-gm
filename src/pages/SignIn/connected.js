import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { SignIn } from '.';
import { login } from '../../redux/actions/auth' 

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    login
  }, dispatch);

const SignConnected = connect(null, mapDispatchToProps)(SignIn)

export { SignConnected }