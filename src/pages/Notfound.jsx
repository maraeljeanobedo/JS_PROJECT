import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="p-8 text-center">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <Link to="/" className="btn mt-4">Go to Home</Link>
    </section>
  );
}
