import Link from "next/link";

export default function Header() {
  return (
    <header
      className={
        "fixed top-0 z-50 flex w-full items-center justify-between bg-white px-4 py-2 shadow md:px-12"
      }
    >
      <Link href={"/"}>
        <p className={`text-lg font-extrabold italic`}>NextShop</p>
      </Link>

      <div className={"flex items-center space-x-2.5 text-sm"}>
        <button
          className={`button border-transparent bg-blue-600 text-white hover:border-blue-600 hover:bg-blue-500`}
        >
          Log In
        </button>
        <button
          className={`button border-blue-600 bg-transparent text-blue-600 hover:bg-blue-100 hover:text-blue-500`}
        >
          Sign Up
        </button>
      </div>
    </header>
  );
}
