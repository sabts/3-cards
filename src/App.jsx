import CardTemplate from "./components/card-template/CardTemplate";
import "./styles/index.css"; 

const App = () => {
  return (
    <>
    <CardTemplate bgcolor="orange" structure="card" textsize="largeText" size="small" icon='/assets/images/Group 2.svg' title='SEDANS' textContent='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'>
    </CardTemplate>
    <CardTemplate bgcolor="green" structure="card" textsize="largeText" size="small" icon='assets/images/Group 3.svg' title='SUVs' textContent='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'>
    </CardTemplate>
    <CardTemplate bgcolor="darkGreen" structure="card" textsize="largeText" size="small" icon='assets/images/Group 4.svg' title='SUVs' textContent='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'>
    </CardTemplate>
    </>
  );
};

export default App;
