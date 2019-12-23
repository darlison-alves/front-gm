import { connect } from 'react-redux';
import { Profile } from './Profile';
import { bindActionCreators } from 'redux';

import { getReposStarred } from '../../redux/actions/repos'
import { getUser } from '../../redux/actions/user'
import { logout } from '../../redux/actions/auth';




const mapDispatchToProps = dispatch =>
    bindActionCreators({ getReposStarred, getUser, logout }, dispatch);

const mapStateToProps = state => ({
    repos: state.repos.data,
    loading: state.repos.loading_repo,
    user: state.user.data
});

const ProfileConnected = connect(mapStateToProps, mapDispatchToProps)(Profile)

export {
    ProfileConnected
}