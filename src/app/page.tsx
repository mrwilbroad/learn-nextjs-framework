import Link from "next/link";



export const revalidate = 3600;


export default function Home() {
  return (
    <main className="container">
      <p> Hello Start here</p>
      <Link  href="/contact" className="text-decoration-none border p-2">
        Contact page
      </Link>
    </main>
  );
}
