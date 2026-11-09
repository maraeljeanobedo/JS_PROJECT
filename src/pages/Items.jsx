import { useState } from "react";
import { useNavigate } from "react-router";
import products, { shoeImage } from "../Data/products";

export default function Items() {
  const navigate = useNavigate();

  const [pickedItem, setPickedItem] = useState(null); 
  const [pickedSize, setPickedSize] = useState(null); 
  const [category, setCategory] = useState("All"); 

  
  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const visible = category === "All" ? products : products.filter((p) => p.category === category);

  function openPopup(item) {
    setPickedItem(item);
    setPickedSize(null);
  }

  function closePopup() {
    setPickedItem(null);
    setPickedSize(null);
  }

  
  function buyNow() {
    navigate(`/checkout/${pickedItem.id}?size=${pickedSize}`);
  }

  return (
    <div>
      <h1 className="p-6 pb-0 text-3xl font-bold">All items</h1>

      
      <div className="flex flex-wrap gap-2 px-6 pt-4">
        {categories.map((c) => (
          <button
            key={c}
            className={`btn btn-sm ${category === c ? "btn-primary" : "btn-outline"}`}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-6 p-6">
        {visible.map((item) => (
          <div key={item.id} className="card w-full max-w-sm bg-base-200 shadow-xl sm:w-96">
            <figure>
              <img
                src={item.image || shoeImage}
                alt={item.name}
                className="aspect-square w-full object-contain"
                onError={(e) => {
                  e.currentTarget.onerror = null; 
                  e.currentTarget.src = shoeImage; 
                }}
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p className="text-sm text-base-content/70">{item.note}</p>
              <p className="text-xl font-bold">${item.price}</p>

              <div className="card-actions justify-end">
                <button className="btn btn-primary" onClick={() => openPopup(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      {pickedItem && (
        <dialog className="modal modal-open">
          <div className="modal-box">
            <h3 className="text-lg font-bold">{pickedItem.name}</h3>
            <p className="py-2">Choose your size (US)</p>

            <div className="flex flex-wrap gap-2">
              {pickedItem.sizes.map((size) => (
                <button
                  key={size}
                  className={`btn ${pickedSize === size ? "btn-primary" : "btn-outline"}`}
                  onClick={() => setPickedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>

            <div className="modal-action">
              <button className="btn" onClick={closePopup}>
                Cancel
              </button>
              <button className="btn btn-primary" disabled={!pickedSize} onClick={buyNow}>
                Buy Now
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}