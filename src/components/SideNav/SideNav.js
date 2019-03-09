import React, { Component } from "react";
import { Icon } from "@material-ui/core";
import asset1 from "../../assets/sidenav/asset1.svg";
import asset1Inactive from "../../assets/sidenav/asset1-inactive.svg";
import "./SideNav.css";

// export default class SideNavHome extends React.Component {
//   state = { selectedPath: "" };

//   onItemSelection = arg => {
//     this.setState({ selectedPath: arg.path });
//   };

//   render() {
//     return <App />;
//   }
// }

export default class SideNav extends Component {
  state = {
    items: [
      {
        imageActive: asset1,
        imageInactive: asset1Inactive,
        count: 1,
        active: false
      },
      {
        imageActive: asset1,
        imageInactive: asset1Inactive,
        count: 2,
        active: false
      }
    ]
  };

  handleClick = index => {
    let items = [...this.state.items];

    items.map((item, i) => {
      if (index === i) {
        item.active = !item.active;
      } else item.active = false;
    });

    this.setState(prevState => ({
      items
    }));
  };

  render() {
    console.log(this.state);
    return (
      <div className="nav">
        {this.state.items.map((item, index) => {
          return (
            <div
              key={index}
              className="item-container"
              onClick={() => {
                this.handleClick(index);
              }}
            >
              {item.active ? (
                <img src={item.imageActive} class="Path-272" />
              ) : (
                <img src={item.imageInactive} class="Path-272" />
              )}

              <div className="rounded-rectangle-2">{item.count}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
