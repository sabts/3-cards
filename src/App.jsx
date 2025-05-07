import CardTemplate from "./components/card-template/CardTemplate";
import CardsDiv from "./components/cards-div/CardsDiv";
import "./styles/index.css"; 

const App = () => {
  return (
    <>
    <CardsDiv container = "cardsContainer">
    <CardTemplate color="orange" structure="card" textsize="largeText" size="small" icon='/assets/images/Group 2.svg' title='SEDANS' textContent='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'>
    </CardTemplate>
    <CardTemplate color="green" structure="card" textsize="largeText" size="small" icon='assets/images/Group 3.svg' title='SUVs' textContent='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'>
    </CardTemplate>
    <CardTemplate color="darkGreen" structure="card" textsize="largeText" size="small" icon='assets/images/Group 4.svg' title='LUXURY' textContent='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. '>
    </CardTemplate>
    </CardsDiv>
    </>
  );
};

export default App;
