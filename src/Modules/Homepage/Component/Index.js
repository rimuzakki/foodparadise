import React, { Component } from 'react';
import { Layout } from 'antd';
import FeaturedCities from '../../../Components/Layout/Partial/FeaturedCities';
import SearchCity from '../../../Components/Layout/Partial/SearchCity';
import Api from './../../../Api';
// import axios from 'axios';

const { Content } = Layout;
class Index extends Component {
  constructor() {
    super()
    this.state = {
      featuredCities: null,
      keyword: '',
      citiesResultSearch: null,
      cityKeywordSearch: ''
    }
  }

  changeKeywordHandler = (event) => {
    this.setState({ keyword: event.target.value });
  }

  getFeaturedCities = () => {
    Api.get('cities', {
      params: {
        city_ids: "74,11052,170"
      }
    }).then(({ data }) => {
      // console.log(data)
      if (data.status === "success") {
        this.setState({ featuredCities: data.location_suggestions })
      }
    }).catch(err => console.log(err));
  }

  searchHandler = () => {
    let keyword = this.state.keyword
    Api.get('cities', {
      params: {
        q: keyword
      }
    }).then(({ data }) => {
      if (data.status === 'success') {
        this.setState({
          citiesResultSearch: data.location_suggestions,
          keyword: '',
          cityKeywordSearch: keyword
        })
      }
    }).catch(err => console.log(err))
  }

  componentDidMount() {
    this.getFeaturedCities();
    // console.log(this.state.featuredCities)
  }

  render() {

    return (
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <FeaturedCities title="Featured Cities" cities={this.state.featuredCities} />
        <SearchCity value={this.state.keyword} onChange={this.changeKeywordHandler} onClickSearch={this.searchHandler} />
        {this.state.cityKeywordSearch !== '' && (
          <FeaturedCities
            title="Search Result"
            cities={this.state.citiesResultSearch}
            showSubtitle={true}
            subtitle={this.state.cityKeywordSearch} />
        )}
      </Content>
    );
  }
}

export default Index;