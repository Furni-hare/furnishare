import Link from "next/link";

export default function TopBar() {
  return (
    <nav className="container mx-auto flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Home Link */}
      <Link href="/" className="text-2xl font-bold text-blue-500">
        FurniShare
      </Link>

      {/* Other Navigation Links */}
      <div className="flex space-x-8">
        <Link href="/donate" className="text-xl text-blue-500 font-bold">
          Donate
        </Link>
        <Link href="/collect" className="text-xl text-white hover:text-blue-400">
          Collect
        </Link>
      </div>
    </nav>
  );
}