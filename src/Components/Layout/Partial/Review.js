import React from 'react'
import { Card } from 'antd';
import RatingLabel from './RatingLabel';

const Review = (props) => (
  <Card title="Reviews">
    <>
      <img class="img-responsive" src={props.review.user.profile_image} alt="" style={{ borderRadius: '50%', width: 80 }} />
      <h6 className="font-weight-bold">{props.review.user.name}</h6>
      <RatingLabel
        text={`${props.review.user.foodie_level_num} (${props.review.user.foodie_level})`}
        labelColor={`${props.review.user.foodie_color}`}
      />

      <h6 className="card-text text-muted">{props.review.review_time_friendly}</h6>
      <RatingLabel
        text={`${props.review.rating} (${props.review.rating_text})`}
        labelColor={`${props.review.rating_color}`}
      />
      <p className="card-text">{props.review.review_text}</p>
    </>
  </Card>
)

export default Review