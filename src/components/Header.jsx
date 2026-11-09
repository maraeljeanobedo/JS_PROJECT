import { useState } from "react";
import { NavLink, Link } from "react-router";

export default function Header() {
  const [open, setOpen] = useState(false); // is the hamburger menu open?
  const close = () => setOpen(false);

  const base = "block rounded-lg px-4 py-3 text-lg transition";
  // NavLink gives us isActive, so the current page is highlighted
  const itemClass = ({ isActive }) =>
    `${base} ${isActive ? "bg-green-500/20 text-green-300" : "text-white hover:bg-green-500/10"}`;

  return (
    <header className="sticky top-0 z-30 bg-linear-to-r from-black via-green-950 to-green-800 text-white shadow-lg shadow-black/40">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" onClick={close} className="relative z-20 text-2xl font-extrabold tracking-wide">
          M&amp;R
        </Link>

        {/* Hamburger button */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="relative z-20 grid size-11 place-items-center rounded-lg transition hover:bg-green-500/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>

        {open && (
          <>
            {/* Click anywhere outside the menu to close it */}
            <button aria-label="Close menu" tabIndex={-1} onClick={close} className="fixed inset-0 z-10 cursor-default" />

            <nav className="absolute right-4 top-full z-20 mt-2 w-56 rounded-xl border border-green-500/40 bg-black p-2 shadow-2xl shadow-black/60">
              <NavLink to="/" end onClick={close} className={itemClass}>Home</NavLink>
              <NavLink to="/items" onClick={close} className={itemClass}>Items</NavLink>
            </nav>
          </>
        )}
      </div>
    </header>
  );
}