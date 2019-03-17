import React, { Component } from 'react';

import './AssetListItem.css';

const styles = {
    image: {
        borderRadius: '50%'
    }
};

class AssetListItem extends Component {
    

    render() {
        let asset = this.props.asset;
        
        return (
            <li>
                <div className="list">
                    <div>
                        <img src='https://s3-ap-southeast-1.amazonaws.com/maptrackanurag/user-avatar/child-1837375__340.png' alt="img" style={styles.image} />
                    </div>

                    <div className="asset-info">
                        <span className="asset-id span">ID: {asset._id.slice(0, 5)}</span>
                        <span className="asset-name span">{asset.name}</span>
                        <span className="asset-type span">Type: {asset.type}</span>
                        <button className="asset-status status-active">Active</button>
                    </div>
                    
                </div>
            </li>   
        );
    }
}

export default AssetListItem;