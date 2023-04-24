import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 flex justify-between h-16 px-10 py-5 backdrop-blur border-b border-slate-400 border-solid shadow-md">
        <h1 className="">Purple Space</h1>
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
