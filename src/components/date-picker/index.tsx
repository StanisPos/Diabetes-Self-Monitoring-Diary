import React from 'react';
import * as Components from 'antd';
import styled from 'styled-components';
import moment from 'moment';
import 'antd/dist/antd.css';

const Time = styled(Components.DatePicker)`
  > * input {
    color: ${props => props.theme.colors.burntsienna};
    :hover {
      cursor: pointer;
    }
  }
`;

export const DatePicker: React.FC<any> = props => {
  console.log(props);
  return <Time value={moment()} bordered={false} />;
};
