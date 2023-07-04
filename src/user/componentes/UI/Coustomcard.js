import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function Coustomcard({ values }) {
    return (
       
        <div>
            <Card
                style={{
                    width: '18rem'
                }}
            >
                {
                    values.url ? <img
                        alt="Sample"
                        src="https://picsum.photos/300/200"
                    /> : null
                }

                <CardBody>
                    <CardTitle tag="h5">
                        {values.size}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                       {values.price}
                    </CardSubtitle>
                  
                    {
                        values.Button ? <Button>
                            Button
                        </Button> : null
                    }

                </CardBody>
            </Card>
        </div>
    );
}


export default Coustomcard
; 