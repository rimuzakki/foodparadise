import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card, Button } from 'antd';
import RatingLabel from './RatingLabel';

const { Meta } = Card;


const RestaurantCard = (props) => (
  <Col span={8}>
    <Card
      hoverable
      cover={<img className="img-responsive" src={props.restaurant.thumb} alt="" />}
      title={props.restaurant.name}
    >
      {/* <h6>{restaurant.location.locality}</h6>
      <h6 className="text-muted">{restaurant.location.address}</h6> */}
      <Meta
        title={props.restaurant.location.locality}
        description={props.restaurant.location.address}
      />

      <table className="table">
        <tbody>
          <tr>
            <td>Rating</td>
            <td>
              <RatingLabel
                labelColor={props.restaurant.user_rating.rating_color}
                text={`${props.restaurant.user_rating.aggregate_rating} (${props.restaurant.user_rating.rating_text})`}
              />
            </td>
          </tr>
          <tr>
            <td>Cuisines</td>
            <td>
              {props.restaurant.cuisines}
            </td>
          </tr>
          <tr>
            <td>Cost for two</td>
            <td>
              {props.restaurant.currency + ' ' + props.restaurant.average_cost_for_two}
            </td>
          </tr>
        </tbody>
      </table>

      <Link to={`/restaurant/${props.restaurant.id}`} style={{ textDecoration: 'none' }}>
        <Button type="primary" block>
          View Restaurant Details
        </Button>
      </Link>
    </Card>
  </Col>
)

export default RestaurantCard