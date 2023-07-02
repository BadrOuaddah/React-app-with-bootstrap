import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Container, Row, Col } from "react-bootstrap";
import { PizzaCard } from "./components/PizzaCard/PizzaCard";
import { Confirmation } from "./components/Confirmation/Confirmation";
import pizzas from "./data.json";

function App() {
  return (
    <div>
      <Confirmation />
      <Container>
        <Row>
          {pizzas.map(data =>{
            <div>
              {data.id}
              {data.name}
              {data.image}
              {data.price}
              {data.desc}
            </div>
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
