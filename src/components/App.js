import React from 'react';
import { Container ,Row, Col } from 'reactstrap';
import Filters from './Filters';
import RightSide from './RightSide';

import '../css/App.css';

function App() {    
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col xs="12" sm="2" className="leftDashboard">
                        <Filters />
                    </Col>
                    <Col xs="12" sm="10">
                        <RightSide />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
