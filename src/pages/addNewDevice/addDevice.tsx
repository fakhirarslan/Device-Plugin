import React, { FC, ReactElement } from 'react';
import { getBackendSrv } from '@grafana/runtime';
import { Card, Button, Form, Input, Select, notification } from 'antd';
import './addDevice.less';

export const AddDevice: FC<AddDeviceProps> = (): ReactElement => {
  const openNotification = () => {
    notification.success({
      message: 'Device Added',
    });
  };
  const onFinish = async (values: any) => {
    console.log(values);
    let options: any = {
      method: "POST",
      url: "http://157.230.9.42:82/v1/devices",
      data: values
    };

    // const response = await getBackendSrv(options);
    const response = await getBackendSrv().datasourceRequest(options);
    openNotification();
    console.log(response);
  }

  return (
    <>
      <div id="newdevice">
        <Card title="Add new Device" type="inner" hoverable style={{ width: 350, height: 440, marginTop: 30 }}>
          <Form
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
              className="field-item-margin  form-item-select"
              label="Name"
              rules={[{
                required: true,
                message: 'Please input Device name!',
              }]}
            >
              <Input placeholder="Name" className="form-item-input" />
            </Form.Item>
            <Form.Item
              colon={false}
              name="ip"
              label="IP:"
              className="field-item-margin  form-item-select"
              rules={[{
                required: true,
                message: 'Please input IP!',
              }]}
            >
              {(<Input placeholder="10.0.0.0" name="publicIp" className="form-item-input" />)}
            </Form.Item>
            <Form.Item
              name="monitoring_type"
              label="Monitoring Type"
              className="field-item-margin form-item-select "
              rules={[{
                required: true,
                message: 'Please input monitoring type',
              }]}
            >
              <Select defaultValue="please select type" className="form-item-input" >
                <Select.Option value="node" >Linux/Windows</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ width: '100%' }}
              >
                Add Device
              </Button>
              {' '}
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
};

type AddDeviceProps = {

};
