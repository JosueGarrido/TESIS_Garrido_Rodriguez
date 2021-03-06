import React from 'react';
import '../styles/InfoPages.css';
import ArtistMenuDashboard from "../components/ArtistMenuDashboard";
import { Divider, Row, Col, Layout, Typography, Collapse } from 'antd';
import {CaretRightOutlined } from '@ant-design/icons';
import Routes from "../constants/routes";
import HowBuy from '../images/ImgPages/comprar-imagen.png';
import letraComprar from '../images/ImgPages/comprar-letras.png';
import logoVertical from '../images/logoVertical.png';
const { Title } = Typography;
const {  Content, Sider } = Layout;

const Header = Layout.Header;
const {Panel} =Collapse;
const FrequentQuestions = props => {
    return(
        <>

            <Row type='flex' justify='center' className='header-wrapper' style={{position:"relative"}}>
                <Col span={24}>
                    <Header className='headerPage'>
                        <Row type='flex' justify='space-between' align='bottom'>


                            <Col span={7} align='left' className='main-menu'>


                            </Col>
                            <Col span={10} align='center'>
                                <a href={Routes.HOME}>
                                    <img className='logoPages' src={letraComprar}/>
                                </a>
                            </Col>



                            <Col span={1}>

                            </Col>
                            <Col span={3}>
                                <nav>
                                    <ul>
                                        <li><a href="#"> <i className="down-shadow-menu"></i></a>

                                            <ul style={{textAlign: "center"}} >
                                                <li><a href={Routes.CATEGORY1.replace( ':id', 1 )}>Categorias</a></li>
                                                <li><a href={Routes.ARTIST.replace( ':id', 1 )}>Artistas</a></li>
                                                <li><a href={Routes.LOGIN_CLIENT}>Comprar</a></li>
                                                <li><a href={Routes.LOGIN}>Vender</a></li>
                                                <li><a href={Routes.LOGOUT}>Salir</a></li>
                                            </ul>
                                        </li>

                                    </ul>
                                </nav>
                            </Col>
                            <Col span={3}>
                                <img src={logoVertical} className='logoPages'/>
                            </Col>



                        </Row>

                    </Header>

                </Col>

            </Row>
            <Content className="margin">
                <img src={HowBuy} className="imagesPageHB"/>

                <div className="imgPage">
                    <Row >
                        <Col span={3}>
                        </Col>

                        <Col span={18}><br/><br/><br/><br/>
                            <h1 className="title">
                                Registro
                            </h1>
                            <Collapse defaultActiveKey={['1']}
                                      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                      className="text2"
                            >
                                <Panel header={<b>??C??mo me registro en la Tienda?</b>} key="1">
                                    <p>Debes ingresar al portal www????????????.., ir a la secci??n de registro seleccionar la etiqueta comprador/vendedor y completar el formulario.  </p>
                                </Panel>
                                <Panel header={<b>??Qu?? debo hacer si olvid?? mi contrase??a?</b>} key="2">
                                    <p>Debes ingresar a OLVID?? MI CONTRASE??A, llenar los datos que se solicita y enviaremos a tu correo electr??nico el link para recuperar la contrase??a.</p>
                                </Panel>
                                <Panel header={<b >??Son confidenciales mis datos que comparto en la tienda?</b>} key="3">
                                    <p >S??, los datos que registres en la Tienda son confidenciales.  La Casa de la Cultura Ecuatoriana es la ??nica encargada del manejo y almacenamiento de los datos.</p>
                                </Panel>
                                <Panel header={<b>??Puedo registrarme como organizaci??n, colectivo o comunidad?</b>} key="4">
                                    <p>S??, porque la tienda est?? dirigida a personas naturales y jur??dicas en el ??mbito de la cultura y el arte.</p>
                                </Panel>
                            </Collapse><br/>

                            <h1 className="title">
                                Compra
                            </h1>
                            <Collapse defaultActiveKey={['1']}
                                      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                      className="text2"
                            >
                                <Panel header={<b>??Qu?? debo hacer para comprar en la Tienda? </b>} key="1">
                                    <p>Debes generar una cuenta personal, registrarte llenando los campos solicitados y aceptar.  El producto  art??stico y artesanal que desees comprar lo puedes encontrar a trav??s del buscador o por medio de las categor??as.</p>
                                </Panel>
                                <Panel header={<b >??Seguridad en la compra/venta en la Tienda?</b>} key="2">
                                    <p>Los datos de compradores y vendedores se verificar??n una vez que se concrete la compra, cuya validaci??n la realizar?? tambi??n la comunidad.</p>
                                </Panel>
                                <Panel header={<b>??Por qu?? comprar en la Tienda?</b>} key="3">
                                    <p>Los productos que se venden son elaborados por los propios creadores, artistas y artesanos.  La venta es directa entre el productor y el consumidor, para fomentar y dinamizar la econom??a de la cultura.</p>
                                </Panel>
                                <Panel header={<b>??Qu?? productos puedo encontrar en la Tienda?</b>} key="4">
                                    <p>Productos culturales en diversas manifestaciones: artes pl??sticas, artes literarias, artes musicales, artes esc??nicas, artes audiovisuales y artesan??a.</p>
                                </Panel>
                                <Panel header={<b>??Recibir?? el mismo producto que miro en la fotograf??a de la Tienda?</b>} key="5">
                                    <p >S??, excepto en aquellos productos elaborados por medio de procesos artesanales en los que podr??a haber m??nimas diferencias de acabado.</p>
                                </Panel>
                                <Panel header={<b>??Cu??l es el beneficio por estar como vendedor en la Tienda?</b>} key="6">
                                    <p>Es una oportunidad para exhibir el producto de manera gratuita en la Tienda de la instituci??n cultural m??s importante del pa??s.</p>
                                </Panel>
                                <Panel header={<b>??La  CCE realiza la difusi??n de los productos?</b>} key="7">
                                    <p>S??, al ser la Tienda un servicio cultural de la Instituci??n realizar?? la difusi??n a trav??s de sus redes sociales y multiplicar?? este servicio en cada uno de los n??cleos provinciales.</p>
                                </Panel>

                            </Collapse><br/>

                            <h1 className="title">
                                Pago
                            </h1>
                            <Collapse defaultActiveKey={['1']}
                                      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                      className="text2"
                            >
                                <Panel header={<b>??C??mo puedo realizar el pago de mis compras?</b>} key="1">
                                    <p>El pago lo debes realizar directamente con el vendedor, tomando en cuenta esta recomendaci??n:

                                        Verifica que el titular de la cuenta bancaria en la que vayas a realizar la transferencia coincida con los datos de contacto del vendedor y conserva el comprobante de pago.
                                    </p>
                                </Panel>
                                <Panel header={<b>??C??mo solicito una factura?</b>} key="2">
                                    <p>Tienes que comunicarte con el vendedor y solicitar la factura. Pregunta antes de comprar.</p>
                                </Panel>
                                <Panel header={<b>??Puedo financiar mi compra?</b>} key="3">
                                    <p>El pago o formas de pago lo tienes que consultar y acordar directamente con el vendedor.</p>
                                </Panel>
                            </Collapse><br/>

                            <h1 className="title">
                                Env??o
                            </h1>
                            <Collapse defaultActiveKey={['1']}
                                      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                      className="text2"
                            >
                                <Panel header={<b>??Tiene alg??n costo el env??o?</b>} key="1">
                                    <p>El env??o lo debes coordinar directamente con el vendedor.</p>
                                </Panel>
                                <Panel header={<b>??C??mo recibo o retiro mis productos?</b>} key="2">
                                    <p>Con el vendedor te pondr??s de acuerdo en la forma que m??s te convenga, si deseas que te  env??e y cu??les son los costos, o deseas retirar directamente el producto. Te recomendamos tomar las respectivas medidas de seguridad.</p>
                                </Panel>
                                <Panel header={<b>??Cu??nto tardar?? mi compra en llegar?</b>} key="3">
                                    <p>Los plazos de entrega dependen del destino geogr??fico al que se dirijan los env??os, para lo cual debes coordinar con el vendedor.</p>
                                </Panel>
                            </Collapse><br/>

                            <h1 className="title">
                                Garant??a
                            </h1>
                            <Collapse defaultActiveKey={['1']}
                                      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                      className="text2"
                            >
                                <Panel header={<b>??Los productos tienen garant??a?</b>} key="1">
                                    <p>S??,  todos los productos que se venden en la Tienda son elaborados directamente por los creadores, artistas y artesanos del pa??s, por lo cual se garantiza su autenticidad.</p>
                                </Panel>
                                <Panel header={<b>??Con qui??n debo contactar en caso de que el producto me llegue en mal estado? </b>} key="2">
                                    <p>En este caso debes contactar directamente con el vendedor ya que si el producto te lleg?? defectuoso, te lo cambiar?? por uno nuevo o en su defecto ser?? restaurada, sin que tengas que pagar ning??n costo adicional por este trabajo ni  por el env??o.</p>
                                </Panel>
                                <Panel header={<b>??C??mo saber si una obra es aut??ntica?</b>} key="3">
                                    <p>El vendedor te entregar?? un certificado de autenticidad de obras ??nicas (no seriales) que demostrar?? que la obra es genuina y original. </p>
                                </Panel>
                            </Collapse><br/>

                            <h1 className="title">
                                Cambios y devoluciones
                            </h1>
                            <Collapse defaultActiveKey={['1']}
                                      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                      className="text2"
                            >
                                <Panel header={<b>??Puedo cambiar mis productos?</b>} key="1">
                                    <p>Lo debes consultar y acordar con el vendedor antes de concretar la compra.</p>
                                </Panel>
                                <Panel header={<b>??En qu?? tiempo puedo realizar el proceso de cambio del producto?</b>} key="2">
                                    <p>En un plazo de 48 horas</p>
                                </Panel>
                            </Collapse><br/><br/><br/><br/>
                        </Col>

                        <Col span={3}>
                        </Col>
                    </Row>


                </div>
            </Content>


        </>
    );

};

export default FrequentQuestions;
