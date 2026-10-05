import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Topography } from "@/components/primitives/Topography";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: no route for", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative grid min-h-screen place-items-center overflow-hidden bg-bg px-6">
      <Topography className="mask-fade-y" />
      <div className="relative text-center">
        <p className="label">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          No route for that path
        </h1>
        <p className="mt-3 font-mono text-sm text-fg-subtle">{location.pathname}</p>
        <a
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg border border-line bg-raised px-4 py-2.5 text-sm font-medium transition-colors hover:border-line-strong hover:bg-inset"
        >
          <ArrowLeft className="h-4 w-4 text-fg-subtle" />
          Back home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
