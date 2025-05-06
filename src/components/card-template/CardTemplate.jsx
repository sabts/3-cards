import Button from "../button/Button";

const CardTemplate = ({bgcolor, structure, icon, title, textContent, size}) => {
      const cardColor = `${structure} ${bgcolor}`
    return <div className={cardColor}>
           <img src={icon} alt="card icon" className={size}/>
           <h2 className="largeText">{title}</h2>
           <p className="mediumText">{textContent}</p>
           <Button buttonStyle="buttons">Learn more</Button>
    </div>
}
export default CardTemplate