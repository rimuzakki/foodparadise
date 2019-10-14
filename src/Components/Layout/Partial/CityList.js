import React from 'react'
import { Breadcrumb, Row } from 'antd';
import CityCard from './CityCard';

const FeaturedCities = (props) => (
  <>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
    <h1>Featured Cities</h1>
    <Row gutter={16}>
      {
        props.cities == null ? (
          <div className="col">
            <p>Loading . . . </p>
          </div>
        ) : (
            props.cities.map(city =>
              <CityCard key={city.id} city={city} />
            )
          )
      }
    </Row>
  </>
)

export default FeaturedCities