import React from 'react';
import { Button } from 'antd';

const ButtonGroup = Button.Group;

const CategoryList = (props) => (
  props.categories ? (
    <ButtonGroup>
      {props.categories.map(category => (
        <Button
          key={category.id}
          className={'btnList ' + (props.categorySelected && category.id === props.categorySelected.id ? 'active' : '')}
          onClick={() => props.categoryClickHandler(category)}
        >
          {category.name}
        </Button>
      ))}
    </ButtonGroup>
  ) : (
      <p>Loading</p>
    )
)

export default CategoryList;