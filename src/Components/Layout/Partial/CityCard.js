import React from 'react';
import { Card, Col } from 'antd';
import { Link } from 'react-router-dom'

// import Container from '../Container/Container';

const CityCard = (props) => (
  <Col span={8}>
    <Card>
      <h4 className="card-title">{props.city.name}</h4>
      <p>{props.city.country_name}</p>
      <Link to={`/city/${props.city.id}`} className="card-text">See restaurants in {props.city.name}</Link>
    </Card>
  </Col>
)

export default CityCard