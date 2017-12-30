import React from "react";
import "./breathe.css";
import Nav from '../../Nav';
import Container from '../../Bootstrap/Container';
import Row from '../../Bootstrap/Row';
import Col from '../../Bootstrap/Col';
import { DoubleBounce } from 'better-react-spinkit';


const Breathe = () => (
    <div>
    <Nav/>
    <Container>
      <div id="breathe">
        <DoubleBounce size={400} />
      </div>
    </Container>
    </div>
);

export default Breathe;