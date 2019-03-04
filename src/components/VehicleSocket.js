import {
  Component
} from "react";
import io from "socket.io-client";

class VehicleSocket extends Component {

  constructor(props) {
    super(props);

    this.state = {
      vehicles: [],
    };

    this.socket = io(process.env.REACT_APP_SERVER, {
      transports: ["websocket"],
    });

    this.socket.on("vehicles_update", data => {
        console.log('Data:', data);

        this.setState({
          vehicles: data,
        })
      }

    );

  }

  componentDidMount() {

    this.socket.emit('fuck', 'fucking..')

  }

  render() {
    return this.props.children(this.state.vehicles);
  }
}

export default VehicleSocket;