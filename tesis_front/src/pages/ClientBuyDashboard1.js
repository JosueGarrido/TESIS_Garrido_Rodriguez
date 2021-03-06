import React from 'react';
import ArtistMenuDashboard from "../components/ArtistMenuDashboard";
import { Divider, Row, Col, Layout, Typography } from 'antd';
import {SettingOutlined, ShoppingOutlined} from '@ant-design/icons';
import SellList1 from "../components/SellList1";
import ClientMenuDashboard from "../components/ClientMenuDashboard";

const { Title } = Typography;
const {  Content, Sider } = Layout;


const ClientSellDashboard1 = () => (
    <>
        <Row>
            <ClientMenuDashboard/>

            <Col span={ 18 } >

                <Content style={{ margin: '2px 18px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

                        <Col>
                            <Title style={ { marginTop:15, textAlign: 'center' } }>Ventas</Title>

                            <Col>
                                <SellList1/>
                            </Col>
                        </Col>

                    </div>
                </Content>
            </Col>


        </Row>

    </>
);

export default ClientSellDashboard1;
