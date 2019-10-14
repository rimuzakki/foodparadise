import React, { Component } from 'react'
import Api from '../../../Api';
import { Row, Col, Card } from 'antd';
// import RatingLabel from '../../../Components/Layout/Partial/RatingLabel';
import RestaurantProfile from '../../../Components/Layout/Partial/RestaurantProfile';
import Review from '../../../Components/Layout/Partial/Review';


class RestaurantDetail extends Component {
  constructor() {
    super()
    this.state = {
      restaurant: null,
      reviews: null
    }
  }

  componentDidMount() {
    let { params } = this.props.match
    this.getRestaurantData(params.restaurant_id)
    this.getReviewsData(params.restaurant_id)
  }

  getRestaurantData = (restaurant_id) => {
    Api.get('restaurant', {
      params: {
        res_id: restaurant_id
      }
    }).then(({ data }) => {
      this.setState({
        restaurant: data
      })
    }).catch(err => console.log(err))
  }

  getReviewsData = (restaurant_id) => {
    Api.get('reviews', {
      params: {
        res_id: restaurant_id
      }
    }).then(({ data }) => {
      this.setState({
        reviews: data.user_reviews
      })
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <>
        <div style={{ padding: '0 50px', marginTop: 100 }}>
          <Row>
            <Col span={8}>
              <RestaurantProfile restaurant={this.state.restaurant} />
            </Col>
          </Row>
          <Row>
            <Col>
              {this.state.reviews ? (
                this.state.reviews.map(({ review }) => (
                  <Review key={review.id} review={review} />
                ))
              ) : (
                  <p>Loading...</p>
                )}
            </Col>
          </Row>
        </div>
      </>
    )
  }
}

export default RestaurantDetail