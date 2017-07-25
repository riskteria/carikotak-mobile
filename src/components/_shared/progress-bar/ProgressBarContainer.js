import { startLoadingSpin, stopLoadingSpin } from 'actions/spinnerAction';
import { connect } from 'react-redux';
import ProgressBar from './ProgressBar';

const mapStateToProps = state => {
  return {
    show: state.loadingSpin.show
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startSpin: () => {
      dispatch(startLoadingSpin());
    },
    stopSpin: () => {
      dispatch(stopLoadingSpin());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar);
