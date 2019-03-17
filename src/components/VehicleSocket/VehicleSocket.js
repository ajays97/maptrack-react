import {
  Component
} from "react";
import {connect} from 'react-redux'
import io from "socket.io-client";
import { fetchAssetsLocations } from '../../actions/assets';

let socket
const mapStateToProps = (state = {}) => {
	// console.dir(state)
    return {...state};
};

class VehicleSocket extends Component {

  constructor(props) {
    super(props);

    const { dispatch } = this.props;

    socket = io('http://192.168.26.90:3001/', {
      transports: ["websocket"],
    });

    dispatch(fetchAssetsLocations(socket));

    socket.on("vehicles_update", data => {
      dispatch(fetchAssetsLocations(socket));
    });
  }

  componentWillUnmount() {
    socket.disconnect();
  }

  render() {
    const { assetStore } = this.props;
    return this.props.children(assetStore.assets);
  }
}

export default connect(mapStateToProps)(VehicleSocket);