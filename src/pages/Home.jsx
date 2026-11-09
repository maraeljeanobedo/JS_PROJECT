import { NavLink } from "react-router";
import logo from "../assets/logo.svg";

export default function Home() {
  return (
    <div className="hero min-h-[calc(95vh-4rem)] bg-linear-to-br from-black via-green-950 to-green-800 text-white">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img src={logo} alt="M&R Shoes logo" className="mx-auto mb-8 size-48 drop-shadow-2xl" />
          <h1 className="mb-5 text-5xl font-bold">Shop Your Favorite Shoes Online</h1>
          <p className="mb-6 text-green-100/80">
            Browse our latest collection, pick your item, and check out in just a few clicks.
            Quality products at prices you'll love.
          </p>
          <NavLink to="/items" className="btn border-green-500 bg-green-600 text-white hover:bg-green-500">
            Shop Now
          </NavLink>
        </div>
      </div>
    </div>
  );
}