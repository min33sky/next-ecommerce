import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className={`flex h-full flex-col items-center justify-center space-y-4`}
    >
      <p className={`text-lg font-bold`}>Could not find requested resource</p>
      <Link
        href={"/"}
        className={`button border-blue-600 text-blue-600 hover:bg-sky-100`}
      >
        Go Home
      </Link>
    </div>
  );
}
