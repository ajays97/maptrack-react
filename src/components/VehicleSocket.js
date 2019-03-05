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

    this.socket = io('http://192.168.26.90:3001', {
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


  }

  render() {


    this.socket.on('duck', (data) => {
      console.log("VEL 1");
      console.log(data);
      
    });

    this.socket.emit('fuck', 'asd');
    console.log(this.props);
    return this.props.children(this.state.vehicles);
  }
}

export default VehicleSocket;