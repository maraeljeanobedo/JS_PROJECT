import { useRef, useState } from "react";
import { NavLink, useNavigate, useParams, useSearchParams } from "react-router";
import products, { shoeImage } from "../Data/products";

export default function Checkout() {
  const navigate = useNavigate();
  const { id } = useParams();                       
  const [searchParams] = useSearchParams();
  const size = searchParams.get("size");            

  const product = products.find((p) => p.id === Number(id));

  const [qty, setQty] = useState(1);
  const [info, setInfo] = useState({ name: "", address: "", phone: "" });
  const dialogRef = useRef(null);

  if (!product) {
    return (
      <div className="p-8 text-center">
        <p>Product not found.</p>
        <NavLink to="/items" className="btn mt-4">Back to Items</NavLink>
      </div>
    );
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dialogRef.current.showModal();
  }

  
  function finishOrder() {
    dialogRef.current.close();
    setInfo({ name: "", address: "", phone: "" });
    setQty(1);
    navigate("/items");
  }

  const total = product.price * qty;

  return (
    <div className="mx-auto my-8 flex max-w-md flex-col gap-4 p-4">
      <NavLink to="/items" className="link">← Back to items</NavLink>
      <h1 className="text-2xl font-bold">Checkout</h1>

      <div className="card bg-base-200 p-4">
        <div className="flex items-center gap-4">
           <img
            src={product.image || shoeImage}
            alt={product.name}
            className="w-24 rounded"
            onError={(e) => {
              e.currentTarget.onerror = null; 
              e.currentTarget.src = shoeImage;
            }}
          />
          <div>
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-sm text-base-content/70">{product.note}</p>
            {size && <p className="text-sm">Size (US): {size}</p>}
            <p>${product.price}</p>
          </div>
        </div>
        <label className="mt-4 flex items-center gap-3">
          Quantity
          <input
            type="number"
            min="1"
            value={qty}
            onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
            className="input w-24"
          />
        </label>

        <p className="mt-3 text-lg font-bold">Total: ${total}</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <fieldset>
          <legend>Full name</legend>
          <input type="text"
           name="name" 
           value={info.name} 
           onChange={handleChange}
           className="input w-full"
           required />
        </fieldset>

        <fieldset>
          <legend>Address</legend>
          <input type="text" 
           name="address" 
           value={info.address} 
           onChange={handleChange} 
           className="input w-full" 
           required />
        </fieldset>

        <fieldset>
          <legend>Contact number</legend>
          <input type="tel" 
           name="phone" 
           value={info.phone} 
           onChange={handleChange} 
           className="input w-full" 
           required />
        </fieldset>

        <button type="submit" className="btn btn-primary">Place order</button>
      </form>

      
      <dialog ref={dialogRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Thank you for your purchase!</h3>
          <p className="py-2 text-sm">Your order was successful.</p>

          <div className="flex flex-col gap-1 text-sm">
            <p>Item: {product.name}{size && ` (size ${size})`} x {qty}</p>
            <p>Total: ${total}</p>
            <p>Full name: {info.name}</p>
            <p>Address: {info.address}</p>
            <p>Contact number: {info.phone}</p>
          </div>

          <div className="modal-action">
            <button type="button" className="btn btn-primary" onClick={finishOrder}>Close</button>
          </div>
        </div>
      </dialog>
    </div>
  );
}