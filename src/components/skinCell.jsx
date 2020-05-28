import React, { Component } from "react";

class SkinCell extends Component {
  state = {};

  render() {
    const { item } = this.props;
    const tradable = item.tradable ? "Tradeable" : "Untradeable";
    return (
      <div className="content">
        {item.name}
        {tradable}
        {item.rarity}
      </div>
    );
  }
}

export default SkinCell;
