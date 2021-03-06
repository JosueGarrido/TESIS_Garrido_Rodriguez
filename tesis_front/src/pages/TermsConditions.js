import React from 'react';
import '../styles/InfoPages.css'
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
const TermsConditions = props => {
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
            <Content className="margin" >
                <img src={HowBuy} className="imagesPageHB"/>

                <div className="imgPage">
                    <Row >
                        <Col span={3}>
                        </Col>

                        <Col span={18}><br/><br/>
                            <p className="text3"><b>Informaci??n Legal.- </b>La Casa de la Cultura Ecuatoriana ???Benjam??n Carri??n???, es una instituci??n p??blica, sin fines de lucro, creada con el fin de promover y estimular el desarrollo cultural y libertad de pensamiento en Ecuador. Se constituy?? seg??n Decreto Ejecutivo No. 707, el 9 de agosto de 1944, emitido por el Presidente de la Rep??blica del Ecuador, Jos?? Mar??a Velasco Ibarra. Se encuentra ubicada en la Av. Seis de Diciembre N16-224 y Patria, parroquia La Mariscal, en la ciudad de Quito ??? Ecuador, tel??fono 2528840, y correo electr??nico ??????.????????????????????????).</p>

                            <p className="text3"><b>Objeto.-</b>???La Casa de la Cultura Ecuatoriana Benjam??n Carri??n es el espacio de encuentro com??n, de convivencia y de ejercicio de los derechos culturales, en el que se expresa la diversidad cultural y art??stica, la memoria social y la interculturalidad???.</p>
                            <h1 className="title">
                                1.- Condiciones y Pol??ticas de Uso y Datos
                            </h1>
                            <p className="text3">Al ingresar y utilizar este portal de Internet, cuyo nombre de dominio es www.wasiwallpay.com, el usuario est?? aceptando los presentes t??rminos y condiciones, (en adelante los ???T??rminos y Condiciones???), y declara expresamente su aceptaci??n utilizando para tal efecto los que se aplican a los servicios que ofrece la plataforma de exhibici??n y venta online de productos art??sticos y artesan??as en sus diversas manifestaciones (en adelante los ???Servicios???) prestados por Wasi Wallpay. Este Sitio Web especializado en arte y cultura, es propiedad de la CASA DE LA CULTURA ECUATORIANA ???BENJAM??N CARRI??N??????SEDE NACIONAL, instituci??n p??blica, constituida bajo las leyes ecuatorianas.

                                El acceso al Sitio Web; la creaci??n de una cuenta en el Sitio Web para exhibir y vender productos o servicios l??citos en el Sitio Web; y, la utilizaci??n del mismo, implican la aceptaci??n incondicional de los T??rminos y Condiciones. Esto constituye un contrato legalmente vinculante entre usted y Wasi Wallpay.

                                En caso de que el Usuario no acepte en forma ??ntegra, completa y absoluta estos T??rminos y Condiciones, no puede optar por la aplicaci??n parcial de los mismos y deber?? abstenerse de comprar o hacer uso del sitio web www.wasiwallpay.com Igualmente, si en cualquier momento, el Usuario no estuviere de acuerdo, total o parcialmente con estos T??rminos y Condiciones, deber??n abstenerse inmediatamente de usar el Sitio Web.

                                En caso de que el usuario acceda, utilice el sitio web www.wasiwallpay.com se considerar?? como absoluta y expresa aceptaci??n de las condiciones establecidas en estos T??rminos y Condiciones Generales y en las Pol??ticas de Privacidad de www.wasiwallpay.com, oblig??ndose a cumplir expresamente con las mismas, sin poder alegar el desconocimiento de las mismas.

                                Es importante que lean atentamente y comprendan las condiciones descritas en los presentes T??rminos y Condiciones, puesto que presentan las condiciones generales que regulan el acceso, navegaci??n, uso de datos y del sitio web de Wasi Wallpay, as?? como las responsabilidades por su utilizaci??n, proporcionan informaci??n importante relacionada con sus obligaciones en cuanto a contenido, limitaci??n de responsabilidad y su consentimiento expreso para solucionar mediante arbitraje toda disputa que se pudiera plantear.

                                Estos T??rminos y Condiciones entrar??n en vigor y ser??n exigibles desde el momento en que el Usuario acceda por primera vez al Sitio Web, creen Cuentas de Compradores y/o Vendedores remitan cualquier tipo de informaci??n al Sitio Web y estar??n vigentes mientras los Usuarios hagan uso del Sitio Web.

                                Cualquier modificaci??n a estos T??rminos y Condiciones de uso ser?? realizada cuando el titular de la misma, en este caso Wasi Wallpay lo considere apropiado/adecuado, siendo exclusiva responsabilidad del usuario asegurarse de tomar conocimiento de tales modificaciones.
                            </p>
                            <h1 className="title">
                                2. Capacidad Legal
                            </h1>
                            <p className="text3">Los productos y servicios que ofrece Wasi Wallpay, s??lo est??n disponibles para personas que tengan capacidad legal para contratar. No podr??n utilizar los servicios las personas que no tengan esa capacidad y los menores de edad. Los actos que ??stos realicen en este sitio ser??n responsabilidad de sus padres, tutores, encargados o curadores, y por tanto se considerar??n realizados por ??stos en ejercicio de la representaci??n legal con la que cuentan. Quien registre un Usuario como empresa, deber?? tener capacidad para contratar a nombre de tal entidad y de obligar a la misma en los t??rminos de este Acuerdo.</p>

                            <h1 className="title">
                                3. Tipos de Usuarios
                            </h1>
                            <p className="text3">En Wasi Wallpay existen dos tipos de usuarios: Artistas y artesanos vendedores; y, Usuarios visitantes.</p>
                            <h1 className="title">
                                3.1 Artistas y artesanos vendedores
                            </h1>

                            <p className="text3">Las personas naturales o jur??dicas que deseen exhibir y vender sus productos art??sticos o artesan??a en el Sitio Web (en adelante los ???Vendedores???) deber??n crear una cuenta personal, sin costo (en adelante la ???Cuenta de Vendedor???), y llenar de manera obligatoria el formulario de registro con informaci??n ver??dica, correcta y actualizada de sus datos personales, trayectoria, su trabajo art??stico, indispensables para un mejor servicio desde el sitio web.

                                Una vez completado el registro, se le activar?? su perfil desde su correo electr??nico.

                                Los artistas y/o artesanos vendedores ser??n los ??nicos responsables de la veracidad y exactitud de la informaci??n e im??genes de los productos a promocionar, cargadas al Sitio Web, en la Vitrina Virtual de Exhibici??n (en adelante ???la Vitrina Virtual???). Los artistas y/o artesanos Vendedores se obligan a poner a disposici??n contenidos reales, l??citos, leg??timos y originales de sus obras art??sticas y artesan??as para su comercializaci??n, que sea permitida y cumpla con la ley. Asimismo, los Exhibidores Vendedores se comprometen a utilizar el Sitio Web y sus servicios, en cumplimiento de la legislaci??n aplicable vigente y el orden p??blico.

                                Los artistas y/o artesanos vendedores se comprometen a notificar a www.wasiwallpay.com en forma inmediata y por medio id??neo y fehaciente, cualquier uso no autorizado de su Cuenta y/o Clave, as?? como el ingreso por terceros no autorizados a la misma. Se aclara que est?? prohibida la venta, cesi??n, pr??stamo o transferencia de la Clave y/o Cuenta bajo ning??n concepto.

                                El Sitio Web mantiene una pol??tica estricta y precisa en cuanto a la exhibici??n y venta de los productos que forman parte de la Vitrina Virtual del Sitio Web. Todos los productos exhibidos deber??n cumplir toda legislaci??n y normativa aplicables a estos T??rminos y Condiciones, as?? como con toda la legislaci??n vigente aplicable a nuestro territorio.
                                Por lo tanto, queda prohibida la exhibici??n de productos en el Sitio Web de: 1) Productos robados o falsificados; 2) Productos usados; 3) Productos defectuosos o retirados-descartados; 4) Armas; 5) Productos con el nombre o marca de una compa????a, un dise??ador o un artista en su t??tulo o descripci??n, en el caso de que dichos productos hayan sido realizados de manera ilegal o sin la autorizaci??n expresa de la compa????a, dise??ador o artista; 6) Productos violatorios de los derechos de autor, marcas registradas, confidencialidad, secretos industriales o cualquier derecho de propiedad intelectual de un tercero; 7) Productos fabricados con marfil o especies en peligro de extinci??n; 8) Productos con contenido ofensivo, violento, obsceno, cruel o inapropiado en los nombres, descripciones, logotipos o im??genes de dichos productos. Wasi Wallpay, se reserva el derecho de bloquear el acceso o remover en forma parcial o total toda informaci??n, comunicaci??n o material que a su exclusivo juicio pueda resultar blasfemia o s??mbolos que representen blasfemia, contenido pornogr??fico o sexualmente violento o expl??cito, fraudulento, enga??oso apoyo, representaci??n o exaltaci??n de actividades ilegales; apoyo, representaci??n o exaltaci??n de violencia hacia terceros o uno mismo; apoyo, representaci??n o exaltaci??n de odio, intolerancia, difamatorio u obsceno, violencia o burla hacia un grupo de personas o apoyo de organizaciones que alientan estas actitudes; apoyo o exaltaci??n de crueldad hacia los animales. En el caso de que los artistas y/o artesanos Vendedores presenten en la Vitrina Virtual productos o servicios que contravengan lo aqu?? dispuesto, el Sitio Web podr?? eliminar inmediatamente de su Vitrina Virtual y cancelar su Cuenta de Usuario.
                            </p>

                            <h1 className="title">
                                3.2. Usuarios visitantes
                            </h1>
                            <p className="text3">El usuario visitante ser?? el responsable de todas las operaciones efectuadas en su Cuenta, pues el acceso a la misma est?? restringido al uso de su Clave Secreta y de conocimiento exclusivo del usuario visitante. Se compromete a notificar a www.wasiwallpay.com en forma inmediata y por medio id??neo y fidedigno, cualquier uso no autorizado de su Cuenta y/o Clave, as?? como el ingreso de terceros no autorizados a la misma.

                                Por otro lado, el simple hecho de conectarse con el Sitio Web para visitar la Vitrina Virtual de Wasi Wallpay y solicitar cotizaciones a los artistas y artesanos vendedores, el usuario visitante que consulta el Sitio Web (en adelante el ???Usuario Visitante???) acepta del Sitio Web las condiciones obligatorias que se describen:

                                <br/> ??? Los usuarios visitantes deber??n completar los datos solicitados en el formulario de registro en todos sus campos con datos v??lidos para convertirse en usuario visitante de www.wasiwallpay.com, acceder a las promociones, y para la adquisici??n de los productos y/o servicios, boletines o material publicitario que se exhiben en la Vitrina Virtual.

                                <br/>??? Los usuarios visitantes deber??n abastecer de informaci??n personal de manera exacta, precisa y ver??dica; asume el compromiso de actualizar los Datos Personales conforme resulte necesario y www.wasiwallpay.com podr?? utilizar diversos medios para identificar a sus Usuarios, pero www.wasiwallpay.com la Tienda Vitrina Virtual NO se responsabiliza por la certeza de los Datos Personales provistos por sus usuarios visitantes. Los Usuarios Visitantes garantizan y responden, en cualquier caso, de la exactitud, veracidad, vigencia y autenticidad de los datos personales ingresados.

                                <br/>??? Los usuarios visitantes declaran que conocen y aceptan que la Vitrina Virtual contiene una exposici??n general de los productos y servicios ofrecidos por los artistas o artesanos vendedores. Las transacciones de compra y venta de los productos y servicios de la Vitrina Virtual se realizar??n entre el usuario visitante y el artista o artesano vendedor, sin que el Sitio Web, sus administradores o la CCE sean parte de dichas transacciones, ni responsables de las mismas.

                                <br/>??? Los usuarios visitantes declaran que conocen y aceptan que no podr??n iniciar ning??n tipo de acci??n legal en contra del Sitio Web o la CCE, en caso de que los productos o servicios de la Vitrina Virtual no sean exactos a los seleccionados en su compra.

                                <br/>??? Los usuarios visitantes deber??n hacer uso de la informaci??n disponible en el Sitio Web, en cumplimiento de la normativa aplicable. Los usuarios visitantes deber??n abstenerse, en relaci??n con las informaciones a las que acceden, de recopilar, hacer uso indirecto y, de manera general, de cualquier acto susceptible de constituir un atentado contra la vida privada o la reputaci??n de un tercero.

                                <br/>??? Los usuarios visitantes tienen prohibici??n expresa de reproducir el contenido del Sitio Web en cualquier soporte para uso colectivo o profesional, as?? como internamente en una empresa, por medios electr??nicos para su difusi??n a trav??s de redes inform??ticas internas de empresas u organismos o corporaciones.

                                <br/>??? La violaci??n de estas disposiciones expone al infractor o transgresor a las sanciones civiles y penales a las que hubiere lugar bajo la legislaci??n aplicable.
                            </p>

                            <h1 className="title">
                                4. Manejo de Datos e Informaci??n
                            </h1>
                            <p className="text3">Los artistas y artesanos vendedores y usuarios visitantes reconocen que la recopilaci??n y los tratamientos por parte del Sitio Web y CCE de los datos personales e informaci??n solicitados y entregados libre y voluntariamente por los artistas y artesanos vendedores y usuarios visitantes, como informaci??n personal, trayectoria art??stica, im??genes y fotograf??as son indispensables para prestar el Servicio de exhibici??n virtual.

                                Los artistas y artesanos vendedores autorizan expresamente al Sitio Web el uso de dicha informaci??n, con fines estrictamente de comunicaci??n y publicidad en l??nea, ya sea en redes sociales como Facebook, Twitter, Linkedin, Pinterest, Google Plus, Youtube, etc., al igual que en medios f??sicos fuera de la red.

                                Los artistas y artesanos vendedores, autorizan en forma expresa al sitio Web y a la CCE el uso de textos, fotograf??as, v??deos y cuanto contenido requieran para que se publiquen en el Sitio Web, autorizando el uso a t??tulo gratuito de esta informaci??n y declaran que para el caso de im??genes, estas son de su propiedad o que tienen las autorizaciones correspondientes para hacer uso de ellas.

                                De acuerdo con lo que establece el Art. 212 del C??digo Org??nico de la Econom??a Social de los Conocimientos, los artistas y artesanos vendedores aceptan y declaran que la presencia de su obra en la Vitrina Virtual de Exhibici??n se realiza exclusivamente con fines de comunicaci??n p??blica y de exhibici??n para dar a conocer sus obras. Los artistas y artesanos vendedores declaran y aceptan que la presencia de su obra en Wasi Wallpay no constituye ni constituir?? violaci??n alguna a sus derechos patrimoniales, como titulares del derecho de autor sobre las obras de arte y obras pl??sticas, y, consecuentemente, no tienen derecho a remuneraci??n alguna por dicha presencia en la Vitrina Virtual de Exhibici??n.

                                Esta plataforma se constituye sobre todo en una herramienta de promoci??n, difusi??n y apoyo a la comercializaci??n de la cultura y las artes y de activaci??n de la econom??a de la cultura, para lo cual los artistas y artesanos vendedores autorizan expresamente la reproducci??n de sus obras en el Sitio Web.
                                Sin perjuicio, de lo anterior, los artistas y artesanos vendedores, declaran que conocen y aceptan que Wasi Wallpay es una plataforma en la que la utilizaci??n de las obras de artes pl??sticas se realiza ???con fines exclusivamente de anunciar la exposici??n p??blica o venta de las mismas???. La presencia en el Sitio Web no implica la puesta de las obras a disposici??n del p??blico en soporte material, arrendamiento o alquiler. Las transacciones de venta de las obras de arte se realizar??n entre los Usuarios Visitantes y los artistas y artesanos vendedores. Los artistas y artesanos vendedores declaran que conocen y aceptan que, dada la naturaleza del Sitio Web, ??ste no tiene ni tendr?? obligaci??n alguna a obtener derecho a una participaci??n de acuerdo a lo que dispone el Art. 158 del C??digo Org??nico de la Econom??a Social de los Conocimientos, Creatividad e Innovaci??n.

                                En cualquier caso, las obras que se presenten en la Vitrina Virtual de Exhibici??n ser??n obras promocionadas en los t??rminos que disponen el C??digo Org??nico de la Econom??a Social de los Conocimientos, Creatividad e Innovaci??n.

                            </p>

                            <h1 className="title">
                                5. Propiedad Intelectual y Derechos de Autor
                            </h1>
                            <p className="text3">La estructura general del Sitio, la direcci??n URL en la que est?? disponible, el nombre del dominio correspondiente, su identidad gr??fica, sus im??genes animadas o no, fotograf??as, textos, sonidos que se incluyan, sus logotipos y marcas que aparecen en este Sitio, son propiedad de Wasi Wallpay.
                                Wasi Wallpay, es titular de los derechos de propiedad intelectual e industrial de este sitio web o cuenta con la correspondiente licencia o autorizaci??n para su uso. Es titular de los derechos de propiedad intelectual, industrial y de imagen sobre los contenidos disponibles en este sitio web, o cuenta con la autorizaci??n necesaria para su utilizaci??n. El acceso, navegaci??n y uso de este sitio web por parte del Usuario no implica en ning??n caso renuncia, transmisi??n ni cesi??n total o parcial por parte de Wasi Wallpay de los citados derechos. En consecuencia, no est?? permitido suprimir, modificar, eludir o manipular el aviso de derechos de autor, marcas, nombres comerciales, art??sticos, anuncios, logotipos, bases de datos y cualquier otro dato de identificaci??n de los derechos de Wasi Wallpay o de sus titulares incorporados a los contenidos, sin la autorizaci??n expresa de sus titulares.
                                Se proh??be reproducir, modificar, reutilizar, explotar, comunicar p??blicamente, cargar archivos, enviar por correo, transmitir, usar, tratar o distribuir de cualquier forma la totalidad o parte de los contenidos incluidos en el sitio web para prop??sitos p??blicos o comerciales, si no se cuenta con la autorizaci??n previa y expresa por escrito de Wasi Wallpay o, en su caso, del titular de los derechos a que corresponda. El nombre Wasi Wallpay y sus correspondientes logos son marcas registradas y queda prohibida su reproducci??n o uso sin la autorizaci??n de su titular. La legitimidad de los derechos de propiedad intelectual o industrial correspondientes a los contenidos aportados por terceros es de su exclusiva responsabilidad. Su uso sin autorizaci??n previa y expreso de la CCE, constituye un acto il??cito.
                                La aceptaci??n de estos T??rminos y Condiciones implica la obligaci??n de los usuarios visitantes; artistas y artesanos vendedores a no reproducir ning??n elemento del sitio sin autorizaci??n previa, expresa y por escrito del titular.
                            </p>

                            <h1 className="title">
                                6. Ayuda para navegar
                            </h1>
                            <p className="text3">Se informa a los <b>usuarios visitantes y los artistas y artesanos vendedores</b> que para el buen funcionamiento del Sitio Web se realizar?? sus mejores esfuerzos para prestar el servicio de manera ininterrumpida, salvo interrupciones por mantenimiento, caso fortuito o fuerza mayor y a enmendar los errores que puedan surgir, tan pronto como sea posible.
                                El Sitio Web se reserva el derecho de modificar los T??rminos y Condiciones, las funcionalidades del Sitio Web y las reglas de funcionamiento de la plataforma, las mismas que se ajustar??n a derecho, est??ndares ??ticos y a las buenas costumbres.
                                Nos reservamos el derecho de en cualquier momento:
                                <br/>???	Modificar, de conformidad con la legislaci??n aplicable, las condiciones de los t??rminos y condiciones aqu?? descritos.
                                <br/>???	Modificar el Sitio Web, ya sea mediante la eliminaci??n o interrupci??n de todo tipo de Informaci??n o funciones del mismo, ya sea en parte o en su totalidad; y,
                                <br/>???	Negar o cancelar la autorizaci??n de uso o acceso al Sitio Web.
                                Toda modificaci??n realizada por nuestra parte en las condiciones de los T??rminos y Condiciones se har?? efectiva una vez que dichos cambios est??n disponibles en el Sitio Web. Usted confirma que el uso continuado que usted haga del Sitio Web una vez realizadas las modificaciones supondr?? la aceptaci??n por su parte de dichas modificaciones. En el caso de que no se muestre de acuerdo con las modificaciones o actualizaciones realizadas en el Sitio Web, deber?? interrumpir el uso del mismo. Se recomienda que consulte esta p??gina cada cierto tiempo a fin de familiarizarse con la versi??n m??s actualizada de los T??rminos y Condiciones.
                            </p>

                            <h1 className="title">
                                7. Cl??usula de Resoluci??n de Controversias
                            </h1>
                            <p className="text3">La Constituci??n faculta el empleo de la mediaci??n para la soluci??n de controversias. El art??culo 11 de la Ley Org??nica de la Procuradur??a General del Estado prescribe que las personas jur??dicas del sector p??blico pueden someterse al procedimiento de mediaci??n; y, la Ley Org??nica del Sistema Nacional de Contrataci??n P??blica establece que la mediaci??n es un m??todo v??lido para la soluci??n de las controversias que surjan de los contratos.

                                En este caso, toda controversia o diferencia derivada de la parte t??cnica y/o de navegaci??n dentro de Wasi Wallpay se las someter??n a la Resoluci??n del Centro de Mediaci??n y Arbitraje de la Procuradur??a General del Estado o ante los jueces determinados en la Ley de Modernizaci??n del Estado reformada.
                                En lo que se refiere a la relaci??n comercial entre usuarios visitantes y artistas y artesanos vendedores, se convierte en un contrato entre las partes (intra partes) artista ofertante ??? interesado comprador. El promotor de la tienda se exime de toda responsabilidad civil, penal, administrativa, tributaria, comercial y de cualquier otra ??ndole que se deriven de esta relaci??n. No ser?? responsable ni responder?? por da??os o afectaciones derivadas de la Ley Org??nica de Defensa del Consumidor.
                            </p><br/><br/><br/>
                        </Col>

                        <Col span={3}>
                        </Col>
                    </Row>


                </div>
            </Content>


        </>
    );

};

export default TermsConditions;
