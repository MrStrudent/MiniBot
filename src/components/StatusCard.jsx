function StatusCard({title, value, description}){
  return(
    <article className="stat-card">
            <p>{title}</p>
            <h3>{value}</h3>
            <span>{description}</span>
    </article>
  );
}

export default StatusCard;