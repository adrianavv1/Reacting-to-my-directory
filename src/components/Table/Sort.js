import React, { Component } from "react";
import Row from "./Row";

class Sort extends Component {
  state = {
    filteredEmployees: [],
    sortingDirection: "asc",
    error: "",
  };

  sortName = (key) => {
    let sortedList;
    let direction;
    // Sort by city
    switch (key) {
      case `city`:
        if (this.state.sortingDirection === "asc") {
          sortedList = this.state.filteredEmployees.sort((a, b) =>
            a.name.last > b.name.last ? 1 : -1
          );
          direction = "dsc";
        } else {
          sortedList = this.state.filteredEmployees.sort((a, b) =>
            a.name.last < b.name.last ? 1 : -1
          );
          direction = "asc";
        }
        break;
      default:
        // nothing selected by default
        break;
    }
    this.setState({
      filteredEmployees: sortedList,
      sortingDirection: direction,
    });
  };
  render() {
      const { sortingDirection, filteredEmployees } = this.state;
    
      return (
      <>
        <div class="container-fluid">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search by Last"
            aria-label="Search"
            onChange={ Row } //this is probably wrong. will have to look over it tomorrow.
          />
        </div>
      </>
    );
  }
}
export default Sort;
