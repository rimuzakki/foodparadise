import React, { Component } from 'react';
import { Input } from 'antd';

const { Search } = Input;

class SearchCity extends Component {
  render() {
    return (
      <div>
        <h3>Search City</h3>
        {/* <Input
          type="text"
          placeholder="Type keyword or city name"
          value={this.props.value}
          onChange={this.props.onClickSearch}
        />
        <Button
          className="btn btn-primary"
          type="button"
        >
          Search
        </Button> */}
        <Search
          placeholder="input search text"
          onSearch={this.props.onClickSearch}
          value={this.props.value}
          onChange={this.props.onChange}
          enterButton />
      </div>
    );
  }
}

export default SearchCity;