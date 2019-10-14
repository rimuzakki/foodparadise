import React, { Component } from 'react';
import { Row, Col, Card, Button } from 'antd';

import Api from '../../../Api';
// import Container from '../../../Components/Layout/Container/Container';
import CategoryList from '../../../Components/Layout/Partial/CategoryList';
import SearchKeyword from '../../../Components/Layout/Partial/SearchKeyword';
import SearchCriteria from '../../../Components/Layout/Partial/SearchCriteria';
import RestaurantCard from '../../../Components/Layout/Partial/RestaurantCard';


const categoriesDummy = [
  {
    "categories": {
      "id": 1,
      "name": "Delivery"
    }
  },
  {
    "categories": {
      "id": 2,
      "name": "Dine-out"
    }
  },
  {
    "categories": {
      "id": 3,
      "name": "Nightlife"
    }
  },
  {
    "categories": {
      "id": 4,
      "name": "Catching-up"
    }
  }
]

class City extends Component {
  constructor() {
    super()
    this.state = {
      city: '',
      categories: null,
      categorySelected: null,
      keyword: '',
      criteria: [],
      restaurants: []
    }
  }

  getCityData = (city_id) => {
    Api.get('cities', {
      params: {
        city_ids: `${city_id}`
      }
    }).then(({ data }) => {
      let city = data.location_suggestions[0]
      let newCriteria = {
        criteriaName: 'City',
        data: city
      }
      let criteria = [...this.state.criteria]
      criteria.push(newCriteria)

      this.setState({
        city,
        criteria
      })
      console.log(this.state.city.name)
    }).catch(err => console.log(err))
  }

  getCategoriesData = () => {
    Api.get('categories')
      .then(({ data }) => {
        // proses transform data categories
        let categories = this.transformCategoriesData(data.categories)
        this.setState({ categories })
      }).catch(err => console.log(err))
  }

  componentDidMount() {
    let { city_id } = this.props.match.params
    this.getCityData(city_id)
    this.getCategoriesData()
  }

  transformCategoriesData(categories) {
    let categoriesTransformed = categories.map(category => {
      return category.categories
    })

    return categoriesTransformed
  }

  categoryClickHandler = (category) => {
    // console.log(category)
    let criteria = [...this.state.criteria]
    // ambil element array selain element dengan criteriaName 'Category' 
    criteria = criteria.filter(cri => cri.criteriaName !== 'Category')
    let newCriteria = {
      criteriaName: 'Category',
      data: category
    }
    criteria.push(newCriteria)
    this.setState({ categorySelected: category, criteria })
  }

  changeKeywordHandler = (event) => {
    this.setState({
      keyword: event.target.value
    })
  }

  addToCriteriaHandler = () => {
    let criteria = [...this.state.criteria]
    criteria = criteria.filter(cri => cri.criteriaName !== 'Keyword')
    let newCriteria = {
      criteriaName: 'Keyword',
      data: {
        name: this.state.keyword
      }
    }

    criteria.push(newCriteria)
    this.setState({ keyword: '', criteria })
  }

  removeCriteriaHandler = (index) => {
    let criteria = [...this.state.criteria]
    criteria.splice(index, 1)
    this.setState({ criteria })
  }

  searchHandler = () => {
    this.setState({ restaurants: null })
    // let url = `${API.zomato.baseUrl}/search`
    let params = {}

    for (let cri of this.state.criteria) {

      switch (cri.criteriaName) {
        case 'City':
          params.entity_id = cri.data.id
          params.entity_type = 'city'
          break
        case 'Category':
          params.category = cri.data.id
          break
        case 'Keyword':
          params.q = cri.data.name
          break
        default: break
      }

    }

    Api.get('search', {
      params
    }).then(({ data }) => {
      this.setState({
        restaurants: data.restaurants
      })
    }).catch(err => console.log(err))
  }

  renderRestaurantList = () => {
    if (this.state.restaurants == null) {
      return (
        <Col>
          <p>Loading...</p>
        </Col>
      )
    }

    if (this.state.restaurants.length > 0) {
      return (
        this.state.restaurants.map(({ restaurant }) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))
      )
    }
    else {
      return (
        <Col>
          <p>No Data available. Please select criteria, and click Search</p>
        </Col>
      )
    }
  }

  render() {
    return (
      <div style={{ padding: '0 50px', marginTop: 100 }}>
        <Row>
          <Col span={24}>
            <h4>Restaurant in {this.state.city.name}, {this.state.city.country_name}</h4>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <h5>Categories</h5>
            <CategoryList
              categories={this.state.categories}
              categorySelected={this.state.categorySelected}
              categoryClickHandler={(category) => this.categoryClickHandler(category)}
            />
          </Col>
          <Col span={16}>
            <SearchKeyword
              keyword={this.state.keyword}
              changeKeywordHandler={this.changeKeywordHandler}
              onClickAddToCriteria={this.addToCriteriaHandler}
            />
            <SearchCriteria
              criteria={this.state.criteria}
              removeCriteriaHandler={(index) => this.removeCriteriaHandler(index)}
              onClickSearch={this.searchHandler}
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <h4>Restaurant List</h4>
          {this.renderRestaurantList()}
        </Row>
      </div>
    );
  }
}

export default City;