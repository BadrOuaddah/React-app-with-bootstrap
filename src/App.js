import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { PizzaCard } from './components/PizzaCard/PizzaCard';
import  { Confirmation }  from './components/Confirmation/Confirmation';
import pizzas from './data.json';


function App() {
  return (
        <Container>
          <Row>
          <Confirmation/>
          </Row>
        </Container>
  );
}

export default App;
