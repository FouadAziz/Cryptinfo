import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <h1>Cryptinfo</h1>
      <div>
        <Link href={"/"}>
          <a className="link">Home</a>
        </Link>
        <Link href={"/about"}>
          <a className="link">About</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
