import React from 'react';
import InvoiceFavoriteTabs from './InvoiceFavoriteTabs';
import InvoiceFavoriteCard from './InvoiceFavoriteCard';
import API from './utils/API';

const InvoiceFavoriteFeature = (props) => {
    return (
      <div>
        <div className="row">
          <div className="col m8">
            <InvoiceFavoriteCard theChosenOne={props.theChosenOne}/>
          </div>
          <div className="col m4">
            {/* <ul className="tabs row tabs-fixed-width">
              <InvoiceFavoriteTabs invoice={this.props.invoice} onClick={this.handleOnClick} style={{"background":"pink"}}/>
              <li onClick={this.change} style={{"background":"pink"}} className="tab col">button</li>
            </ul> */}
            <InvoiceFavoriteTabs className="row" invoice={props.favoriteInvoices} onClick={props.handleOnClickFaveTabs} style={{"background":"#64b5f6"}}/>
            {/* <ul>
              <li></li>
            </ul> */}
          </div>
        </div>
      </div>
    )
}

export default InvoiceFavoriteFeature;
