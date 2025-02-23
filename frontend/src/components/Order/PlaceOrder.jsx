import { useState } from "react";
import { placeOrder } from "../../services/api";

const PlaceOrder = () => {
  const [formData, setFormData] = useState({
    pickup_location: "",
    drop_location: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await placeOrder(formData);
      alert("Order placed successfully!");
      setFormData({ pickup_location: "", drop_location: "", price: "" });
    } catch {
      alert("Error placing order. Check console for details.");
    }
  };

  return (
    <div>
      <h2>Place Order</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="pickup_location"
          placeholder="Pickup Location"
          onChange={handleChange}
          value={formData.pickup_location}
          required
        />
        <input
          type="text"
          name="drop_location"
          placeholder="Drop Location"
          onChange={handleChange}
          value={formData.drop_location}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          value={formData.price}
          required
        />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default PlaceOrder;
