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
    <h1>{props.title}</h1>
    {props.showSubtitle === true && props.subtitle !== '' &&
      <h6 className="text-muted">Search result for keyword '{props.subtitle}' </h6>
    }
    <Row gutter={16}>
      {/* {props.cities.map(city =>
        <CityCard key={city.id} city={city} />
      )} */}

      {props.cities == null ? (
        <div className="col">
          <p>Loading . . . </p>
        </div>
      ) : (
          _renderCityList(props.cities)
        )}
    </Row>
  </>
)

const _renderCityList = (cities) => {
  if (cities.length > 0) {
    return (
      cities.map(city =>
        <CityCard key={city.id} city={city} />
      )
    )
  } else {
    return (
      <div>
        <p>Data not Found</p>
      </div>
    )
  }
}

export default FeaturedCities