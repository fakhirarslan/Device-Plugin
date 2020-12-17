import React, { FC, ReactElement, useState } from 'react';
import { Tooltip, Button, Typography, Drawer } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { AddDevice } from './addNewDevice/addDevice';
import { ListView } from './listview/ListView';
import './styles.less';

export const Device: FC<DeviceProps> = (): ReactElement => {
  const [visible, setVisible] = useState(false);
  const toggleDrawer = () => {
    setVisible(!visible);
  };

  // useEffect(() => {
  //   const fetchDevices = async() =>{
  //    let options: any = {
  //      method:"get",
  //      url: "http://157.230.9.42:82/v1/devices",
       
  //    };
   
  //    // const response = await getBackendSrv(options);
  //    const response = await getBackendSrv().datasourceRequest(options);
  //    console.log(response);
  //   }
  //   fetchDevices();
  //  }, );

  return (
    <>
      <div>
        <div className="create-button">
          <Tooltip title='Create'>
            <span>
              <Button type="primary" onClick={toggleDrawer}>
                <PlusOutlined /><Typography.Text className='create-text'>Create</Typography.Text>
              </Button>
            </span>
          </Tooltip>
        </div>
        <Drawer
          placement="right"
          width="400px"
          closable={true}
          onClose={toggleDrawer}
          visible={visible}
        >
          <AddDevice />
        </Drawer>
        <ListView />
      </div>
    </>
  );
};

type DeviceProps = {
  
};
