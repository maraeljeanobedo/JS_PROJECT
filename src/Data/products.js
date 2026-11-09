
import nikeSuperRepGo from "../images/nike-superrep-go.jpg";
import pumaCourtClassic from "../images/puma-court-classic.jpg";
import nikeAirZoomPegasus from "../images/nike-air-zoom-pegasus.jpg";
import nikeVictoriOneSlide from "../images/nike-victori-one-slide.jpg";
import adidasAdilette from "../images/adidas-adilette.jpg";
import birkenstockArizona from "../images/birkenstock-arizona-sandal.jpg";

const products = [
  
  {
    id: 1,
    name: "Nike SuperRep Go",
    category: "Shoes",
    price: 1000,
    sizes: [7, 8, 9, 10],
    image: nikeSuperRepGo,
    note: "Light and flexible for workouts.",
  },

  {
    id: 2,
    name: "Puma Court Classic",
    category: "Shoes",
    price: 1200,
    sizes: [7, 8, 9, 10],
    image: pumaCourtClassic,
    note: "Light and flexible for everyday.",
  },
  {
    id: 3,
    name: "Nike Air Zoom Pegasus",
    category: "Shoes",
    price: 1500,
    sizes: [8, 9, 10, 11],
    image: nikeAirZoomPegasus,
    note: "Cushioned for long daily runs.",
  },

  
  {
    id: 4,
    name: "Nike Victori One Slide",
    category: "Slippers",
    price: 800,
    sizes: [6, 7, 8, 9, 10],
    image: nikeVictoriOneSlide,
    note: "Soft cushioned slide for everyday wear.",
  },
  {
    id: 5,
    name: "Adidas Adilette Slides",
    category: "Slippers",
    price: 700,
    sizes: [6, 7, 8, 9, 10],
    image: adidasAdilette,
    note: "Quick-dry slides for home and the beach.",
  },

  {
    id: 6,
    name: "birkenstock arizona sandal",
    category: "Slippers",
    price: 850,
    sizes: [6, 7, 8, 9, 10],
    image: birkenstockArizona,
    note: "Durable and comfortable for all-day wear.",
  },
];

export const shoeImage =
  "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp";

export default products;