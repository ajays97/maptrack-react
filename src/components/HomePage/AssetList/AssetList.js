import React, { Component } from 'react';
import { connect } from 'react-redux';

import AssetListItem from '../AssetListItem/AssetListItem';
import './AssetList.css';

class AssetList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filteredAssets: this.props.assetStore.assetList
        }

        
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            filteredAssets: nextProps.assetStore.assetList
        })
    }

    searchHandler = (event) => {
        let searchQuery = event.target.value.toLowerCase(),
            filteredAssets = this.props.assetList.filter((asset) => {
                let searchValue = asset.name.toLowerCase();
                return searchValue.indexOf(searchQuery) !== -1;
            });

        this.setState({
            filteredAssets
        });
    }

    render() {
        let assets = this.state.filteredAssets;
        return(
            <div className="holder">
                <div className="search-bar">
                    <input type="text" onChange={this.searchHandler} />
                </div>
                <div className="asset-list">
                    <ul>
                        {
                        assets.map((asset) => {
                            return <AssetListItem key={asset._id} asset={asset} />
                        })
                    }          
                    </ul>
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
  
  export default connect(mapStateToProps)(AssetList);