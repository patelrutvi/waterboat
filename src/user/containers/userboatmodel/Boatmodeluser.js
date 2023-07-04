import React from 'react';
import { Col, Row } from 'reactstrap';
import Coustomcard from '../../componentes/UI/Coustomcard';


function Boatmodeluser({ bdata }) {
    return (

        <> <Row style={{justifyContent:'space-between'}}>
            {
                bdata.map((v) => {
                    return (
                        <Col sm="4">

                            <Coustomcard values={v} />
                        </Col>
                    )
                })
            }
        </Row>
        </>
        // <Row >
        // {
        //     bdata.map((v, i) => {
        //         return (
        //             <Col sm="3">
        //                 <Coustomcard values={v} />

        //             </Col>
        //         )
        //     })
        // }
        // </Row>
    );
}

export default Boatmodeluser;