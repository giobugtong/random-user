import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[75vh] gap-4">
      <p className="font-bold">404: Page not found</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
