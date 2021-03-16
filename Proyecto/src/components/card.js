const Card = ({title, description, link, imgn}) => {

    return (
      <a href={link} className="card">
        <h3>{title} &rarr;</h3>
        <p>{description}</p>
        <img src={imgn} width="300" height="150"></img>
      </a>
    )
  }

export default Card;
