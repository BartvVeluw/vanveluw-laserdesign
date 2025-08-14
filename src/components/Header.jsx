import { Link, NavLink } from "react-router-dom";

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `text-sm hover:opacity-70 ${isActive ? "font-semibold" : ""}`
    }
  >
    {children}
  </NavLink>
);

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl border border-neutral-200 bg-white shadow-sm">
            <span className="text-xs font-bold tracking-widest">VL</span>
          </div>
          <div>
            <div className="text-sm font-semibold leading-none">
              Van Veluw Laserdesign
            </div>
            <div className="text-xs text-neutral-500">
              Precisie • Creativiteit • Kwaliteit
            </div>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/producten">Producten</NavItem>
          <a className="text-sm hover:opacity-70" href="/#portfolio">
            Portfolio
          </a>
          <a className="text-sm hover:opacity-70" href="/#over">
            Over ons
          </a>
          <a className="text-sm hover:opacity-70" href="/#contact">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="/#contact"
            className="rounded-xl border border-neutral-300 px-3 py-2 text-sm font-medium hover:bg-neutral-50"
          >
            Offerte
          </a>
          <Link
            to="/producten"
            className="rounded-xl bg-yellow-500 px-3 py-2 text-sm font-semibold text-neutral-900 shadow hover:bg-yellow-400"
          >
            Bekijk producten
          </Link>
        </div>
      </div>
    </header>
  );
}
