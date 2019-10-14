import React from 'react'
import { Card, Button, Icon } from 'antd';


const SearchCriteria = (props) => (
  <Card title="Find Restaurants based on criteria :">
    <table className="table table-hover">
      <tbody>
        {props.criteria.map((cri, index) => (
          <tr key={index} className="table-active">
            <td width="40%">{cri.criteriaName}</td>
            <td width="50%">{cri.data.name}</td>
            <td>
              {cri.criteriaName !== 'City' && (
                <Button onClick={() => props.removeCriteriaHandler(index)}>
                  <Icon type="close-circle" />
                </Button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    <Button onClick={props.onClickSearch}>
      Search
    </Button>
  </Card>
)

export default SearchCriteria