const Card3 = ({title, description, link, imgn}) => {

    return (
      <a href={link} className="card">
        <h3>{title} &rarr;</h3>
        <p>{description}</p>
        <img src={imgn} width="150" height="300"></img>
      </a>
    )
  }

export default Card3; 