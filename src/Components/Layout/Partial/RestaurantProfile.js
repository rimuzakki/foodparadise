import React from 'react'
import { Row, Col, Card } from 'antd';
import RatingLabel from './RatingLabel';

const RestaurantProfile = (props) => (
  <>
    {
      props.restaurant ? (
        <Card
          hoverable
          cover={<img src={props.restaurant.featured_image} alt="" />}
        >
          <h4 className="text-success" style={{ fontWeight: 800 }}>{props.restaurant.name}</h4>
          <h6 style={{ fontWeight: 600 }}>{props.restaurant.location.locality}</h6>
          <h6 className="text-muted">{props.restaurant.location.address}</h6>
          <table className="table">
            <tbody>
              <tr>
                <td>Rating</td>
                <td>
                  <RatingLabel
                    labelColor={props.restaurant.user_rating.rating_color}
                    text={`${props.restaurant.user_rating.aggregate_rating} (${props.restaurant.user_rating.rating_text})`}
                  />
                  <h6>{props.restaurant.user_rating.votes} Votes</h6>
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
        </Card>
      ) : (
          <p>Loading...</p>
        )
    }
  </>
)

export default RestaurantProfile