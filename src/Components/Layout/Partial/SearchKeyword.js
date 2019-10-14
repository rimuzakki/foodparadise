import React from 'react'
import { Card, Input } from 'antd';
const { Search } = Input;

const SearchKeyword = (props) => (
  <>
    <h5>Keyword</h5>
    <Card>
      <Search
        placeholder="Type keyword i.e : restaurant's name, location, cuisine, etc."
        onSearch={props.onClickAddToCriteria}
        value={props.keyword}
        onChange={props.changeKeywordHandler}
        enterButton />
    </Card>
  </>
)

export default SearchKeyword