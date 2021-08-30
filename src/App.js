import './App.css';
import Break from "./components/Break/Break";
import Session from "./components/Session/Session";
import Timer from "./components/Timer/Timer";
import Controls from "./components/Controls/Controls";
import {Card, Col, Container, Row} from "react-bootstrap";

function App() {
    return (


        <div className="App">

            <Container className="p-3">

                <Card>
                    <Card.Title>
                        <header className={'justify-content-center'}>
                            <h1>25 + 5 Clock</h1>
                        </header>
                    </Card.Title>


                    <main>

                        <section id="lengths">
                            <Row>
                                <Col>
                                    <Break/>
                                </Col>
                                <Col>
                                    <Session/>
                                </Col>
                            </Row>
                        </section>


                        <section id="time">
                            <Timer/>
                            <Controls/>
                        </section>
                    </main>

                </Card>

            </Container>

        </div>
    );
}

export default App;
