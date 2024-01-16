import { Link, useLocation } from "react-router-dom";

export default function Header({ title }: { title?: string }) {
  const { pathname } = useLocation();
  return (
    <header className="p-4 sticky top-0 z-10 bg-zinc-100 shadow border-b ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-4xl font-bold">
            {title ?? "Random User"}
          </h1>
          {pathname !== "/" && (
            <Link to="/" className="font-medium">
              Home
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
