import React from 'react';
import { Card, Col, Row } from 'antd';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <Row gutter={30}>
      <Col span={24} md={24} lg={8}>
        <Card title="Confirmed" bordered={false} className="confirmed-card">
          <div className="covid-count">
            <CountUp
              start={0}
              end={confirmed.value}
              duration={2.75}
              separator=","
            />
          </div>
          <div>{new Date(lastUpdate).toDateString()}</div>
          <div>Number of confirmed from COVID-19.</div>
        </Card>
      </Col>
      <Col span={24} md={24} lg={8}>
        <Card title="Recovered" bordered={false} className="recovered-card">
          <div className="covid-count">
            <CountUp
              start={0}
              end={recovered.value}
              duration={2.75}
              separator=","
            />
          </div>
          <div>{new Date(lastUpdate).toDateString()}</div>
          <div>Number of recoveries from COVID-19.</div>
        </Card>
      </Col>
      <Col span={24} md={24} lg={8}>
        <Card title="Deaths" bordered={false} className="death-card">
          <div className="covid-count">
            <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
          </div>
          <div>{new Date(lastUpdate).toDateString()}</div>
          <div>Number of deaths from COVID-19.</div>
        </Card>
      </Col>
    </Row>
  );
};
export default Info;
