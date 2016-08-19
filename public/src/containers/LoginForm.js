import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import {withRouter} from 'react-router';

const mapStateToProps = state=> state;

export default connect(mapStateToProps)(withRouter(LoginForm));