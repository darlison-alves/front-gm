import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login, setError } from '../../redux/actions/auth' 
import { SignInForm } from '../../Components/Forms/SignInForm';

const mapStateToProps = state => ({
  user: state.user.data,
  loading_data_user: state.user.loading_data_user,
  error: state.user.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    login,
    setError
  }, dispatch);

const SignConnected = connect(mapStateToProps, mapDispatchToProps)(SignInForm)

export { SignConnected }