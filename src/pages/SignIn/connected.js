import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login, setError } from '../../redux/actions/auth' 
import { SignInForm } from '../../Components/Forms/SignInForm';

const mapStateToProps = state => ({
  user: state.auth.data,
  loading_data_user: state.auth.loading_data_user,
  error: state.auth.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    login,
    setError
  }, dispatch);

const SignConnected = connect(mapStateToProps, mapDispatchToProps)(SignInForm)

export { SignConnected }