export default function Footer() {
  return (
    <footer className="border-t border-neutral-200/70 bg-white/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
        <div className="text-sm text-neutral-600">
          © {new Date().getFullYear()} Van Veluw Laserdesign
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="hover:opacity-70">
            Instagram
          </a>
          <a href="#" className="hover:opacity-70">
            Facebook
          </a>
          <a href="#" className="hover:opacity-70">
            KVK & info
          </a>
        </div>
      </div>
    </footer>
  );
}
