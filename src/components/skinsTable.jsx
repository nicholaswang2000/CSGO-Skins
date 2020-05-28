import React, { Component } from "react";
import axios from "axios";
import SkinCell from "./skinCell";
import tempData from "./data/tempData.json";

class SkinsTable extends Component {
  state = {
    items: [],
    isLoading: true,
  };

  async componentDidMount() {
    const { data: items } = await axios.get("/GetItemsList/v2/");
    this.setState({
      items: [items.items_list["AK-47 | Aquamarine Revenge (Battle-Scarred)"]],
      isLoading: false,
    });
    console.log(this.state.items);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    }
    return (
      <div className="content">
        {this.state.items.map((item) => (
          <SkinCell item={item} />
        ))}
      </div>
    );
  }
}

export default SkinsTable;
