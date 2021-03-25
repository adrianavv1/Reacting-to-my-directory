import React, { Component } from "react";

class Sort extends Component {
  state = {
    filteredEmployees: [],
    sortingDirection: "asc",
    error: "",
  };

  sortName = (key) => {
    let sortedList;
    let direction;
    // Sort by last name or first name
    switch (key) {
      case `last`:
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
      case `first`:
        if (this.state.sortingDirection === "asc") {
          sortedList = this.state.filteredEmployees.sort((a, b) =>
            a.name.first > b.name.first ? 1 : -1
          );
          direction = "dsc";
        } else {
          sortedList = this.state.filteredEmployees.sort((a, b) =>
            a.name.first < b.name.first ? 1 : -1
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
    return (
      <>
        <div class="container-fluid">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search by Last"
            aria-label="Search"
            onChange={sort}
          />
        </div>
      </>
    );
  }
}
export default Sort;
