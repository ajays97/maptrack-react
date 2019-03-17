import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchAssetTypeList } from '../../actions/assets';
import AssetList from '../HomePage/AssetList/AssetList';
import "./SideNav.css";

class SideNav extends Component {

  handleClick = index => {

    const { dispatch } = this.props;

    dispatch(fetchAssetTypeList(index));
    
  };

  render() {
    return (
      <div>
        <div className="nav">
          <div>
            {this.props.assetStore.assetTypes.map((item, index) => {
              return (
                <div
                  key={index}
                  className="item-container"
                  onClick={() => {
                    this.handleClick(index);
                  }}>
                  {item.active ? (
                    <img src={item.imageActive} className="asset-icon" alt="active" />
                  ) : (
                    <img src={item.imageInactive} className="asset-icon" alt="inactive" />
                  )}

                  <div className="rounded-rectangle-2">{item.count}</div>
                </div>
              );
            })}
          </div>
          {
            this.props.assetStore.openIndex !== -1 ?
            <AssetList assetList={this.props.assetStore.assetList} /> :
            ''
          }
        </div>
      </div>
      
    );
  }
}

function mapStateToProps(state) {
  return {
      ...state
  };
}

export default connect(mapStateToProps)(SideNav);