function CartDetails({ therme }) {
  return (
    <div>
      {therme.map((t) => (
        <div key={t.id}>
          <img src={t.image[1]} alt={t.nom} />
          <h1>{t.nom}</h1>
          <p>{t.description}</p>
        </div>
      ))}
    </div>
  );
}

export default CartDetails;
