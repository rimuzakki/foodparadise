import React from 'react'
import { Button } from 'antd';

const RatingLabel = (props) => (
  <Button
    style={{
      color: 'white',
      backgroundColor: `#${props.labelColor}`,
      borderColor: `#${props.labelColor}`,
    }}
  >
    {props.text}
  </Button>
)

export default RatingLabel