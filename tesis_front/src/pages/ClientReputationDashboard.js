import React from 'react';
import { Divider, Row, Col, Layout, Typography } from 'antd';
import {SettingOutlined, ShoppingOutlined} from '@ant-design/icons';
import API from "../data";
import ReputationList from "../components/ReputationList";
import ClientMenuDashboard from "../components/ClientMenuDashboard";

const { Title } = Typography;
const {  Content, Sider } = Layout;

export const fetchArticles = async() => {
    // console.log( `Show data fetched. Articles: ${ JSON.stringify( articles ) }` );

    return await API.get( '/reputations' );
};


const ClientReputationDashboard = () => (
    <>
        <Row>
            <ClientMenuDashboard/>

            <Col span={ 18 } >

                <Content style={{ margin: '2px 18px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Col>
                            <Title style={ { marginTop:15, textAlign: 'center' } }>Reputación</Title>

                            <Col>
                                <ReputationList/>
                            </Col>
                        </Col>
                    </div>
                </Content>
            </Col>

        </Row>

    </>
);

export default ClientReputationDashboard;
