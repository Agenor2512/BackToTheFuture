function CartDetails() {
  return (
    <div>
      {selectedThermes.map((therme) => (
        <div key={therme.id}>
          <img src={therme.image[1]} alt={therme.nom} />
          <h1>{therme.nom}</h1>
          <p>{therme.description}</p>
        </div>
      ))}
    </div>
  );
}

export default CartDetails;
