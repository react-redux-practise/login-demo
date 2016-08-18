import { connect } from 'react-redux';
import NavMenu from '../components/NavMenu';

const mapStateToProps = (state)=> {
  return state;
};

export default connect(mapStateToProps)(NavMenu);