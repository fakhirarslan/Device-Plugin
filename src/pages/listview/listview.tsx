import React, { FC, ReactElement, useEffect, useState } from 'react';
import { List, Row, Col, Popconfirm, Tooltip, Badge, Spin } from 'antd';
import { DeleteTwoTone } from '@ant-design/icons';
import { getBackendSrv } from '@grafana/runtime';
import './listview.less';

export const ListView: FC<ListViewProps> = (): ReactElement => {
  const [list, setList] = useState([]);
  const [issuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const fetchDevices = async () => {
      let options: any = {
        method: "get",
        url: "http://157.230.9.42:82/v1/devices",

      };

      const response = await getBackendSrv().datasourceRequest(options);
      console.log(response.data);
      setList(response.data);
      setIsSuccess(true);
    }
    fetchDevices();
  }, []);

  return (
    <>
      <div id="listview">
        {issuccess ?
          <List
            className="list"
            itemLayout="horizontal"
            dataSource={list}
            renderItem={(item: any) => (
              <>
                <List.Item key={item.id}>
                  <List.Item.Meta
                    avatar={<Badge status="processing" />}
                    title={item.name}
                    description={
                      <Row>
                        <Col><b>IP:</b> {item.ip}</Col>
                        <Col><b>Monitoring Type:</b> {item.monitoring_type}</Col>
                      </Row>
                    }
                  />
                  <Popconfirm
                    placement="topLeft"
                    title="Are you sure?"
                    okText="Yes"
                    cancelText="No"
                  >
                    <Tooltip title="Delete">
                      <DeleteTwoTone />
                    </Tooltip>
                  </Popconfirm>
                </List.Item>
              </>
            )}
          />
          :
          <Spin className="listview-spin" size="large" />
        }
      </div>
    </>
  );
};

type ListViewProps = {

};
