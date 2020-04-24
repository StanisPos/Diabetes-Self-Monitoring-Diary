import React from 'react';
import { DatePicker } from 'antd';
import styled from 'styled-components';
import moment from 'moment';

const Time = styled(DatePicker)`
	> * > input {
		color: red;
		:hover {
			cursor: pointer;
		}
	}
`;

const MeasureItem: React.FC<any> = props => {
	return <Time value={moment()} bordered={false} />;
};

export default MeasureItem;
