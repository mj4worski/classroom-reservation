import { connect } from 'react-redux';
import ClassSearch from './ClassSearch';
import { fetchClasses } from '../shared/sagas/';


const mapStateToProps = state => ({
  classes: state.classes,
  error: state.errors.classes,
});

export default connect(mapStateToProps, { onDidMount: fetchClasses })(ClassSearch);
