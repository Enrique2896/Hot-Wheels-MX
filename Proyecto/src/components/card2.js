const Card2 = ({title, description, link, icn}) => {

    return (
      <a href={link} className="card">
        <h3>{title} &rarr;</h3>
        <p>{description}</p>
        <img src={icn} width="200" height="200"></img>
      </a>
    )
  }

export default Card2;
