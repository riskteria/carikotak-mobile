import { connect } from 'react-redux';
import { startLoadingSpin, stopLoadingSpin } from 'actions/spinnerAction';

import StoryScreen from './StoryScreen';

const mapStateToProps = state => {
  return {
    loadingSpin: state.loadingSpin
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

export default connect(mapStateToProps, mapDispatchToProps)(StoryScreen);
