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
                    values.url ? null : <img
                    alt="Sample"
                    src="https://picsum.photos/300/200"
                />
                }

                <CardBody>
                    <CardTitle tag="h5">
                      <h4>Size:{values.size}</h4>
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                       <p>Length:{values.Length}</p>
                    </CardSubtitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                         <p>Engine:{values.engine}</p>
                     
                    </CardSubtitle>
                  
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >

                       <p>Price:{values.price}</p>
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