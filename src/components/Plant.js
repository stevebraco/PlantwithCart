const Plant = ({ cover, name, quantity, water }) => {
  return (
    <div>
      <img src={cover} alt={name} />
      <h4>{name} </h4>
      <h4>{quantity} </h4>
    </div>
  );
};

export default Plant;
