import React from 'react';
import { Col, Row } from 'reactstrap';
import Coustomcard from '../../componentes/UI/Coustomcard';

function Boatmodeluser(bdata) {
    return (
        <Row >
        {
            bdata.map((v, i) => {
                return (
                    <Col sm="3">
                        <Coustomcard values={v} />
                        
                    </Col>
                )
            })
        }
        </Row>
    );
}

export default Boatmodeluser;