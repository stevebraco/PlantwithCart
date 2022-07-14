const Cart = ({ cart }) => {
  return (
    <div>
      {cart.map((item, index) => (
        <p key={index}>
          {item.name} {item.price}$ {item.quantity}
        </p>
      ))}
    </div>
  );
};

export default Cart;
