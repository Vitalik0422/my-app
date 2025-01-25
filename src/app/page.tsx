import Link from "next/link";


export default function Home() {
  return (
    <div>
      <Link href="/list">TodosList</Link>
      <Link href="/create">TodosCreate</Link>
    </div>
  );
}
