import React from 'react';
import { Label, FormControl, Button, ButtonToolbar, Row, Col } from 'react-bootstrap';
import './header.scss';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() { }
    render() {
        return (
            <div className='headerText'>
                <Row className="show-grid">
                    <Col xs={4} xsOffset={4}>
                        <Label>New</Label>
                        <FormControl
                            type="text"
                            value='text'
                            placeholder="Enter text"
                        />
                        <ButtonToolbar>
                            <Button bsStyle="primary">Primary</Button>
                        </ButtonToolbar>
                    </Col>
                </Row>

            </div>
        );
    }
};