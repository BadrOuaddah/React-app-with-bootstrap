import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Container, Row, Col } from "react-bootstrap";
import { PizzaCard } from "./components/PizzaCard/PizzaCard";
import { Confirmation } from "./components/Confirmation/Confirmation";
import pizzas from "./data.json";

function App() {
  const [ordred, setOrdred] = useState(null);

  //? const [ordredPizza, setordredPizza] = useState(null);

  function displayConfirmation(pizzas) {
    setOrdred(pizzas);
    setTimeout(() => {
      setOrdred(null);
    }, 70000);
  }
  return (
    <div>
      {ordred && <Confirmation toggle={() => setOrdred(null)} pizzas={ordred}/>}
      <Container>
        <Row>
          {pizzas.map((data) => (
            <Col xs={3} className="mb-5" key={data.id}>
              <PizzaCard data={data} setOrdred={displayConfirmation} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
