import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
    <div>
      <h1>Web Development- Assignments</h1>
      <div>
        <ul>
          <li><Link href="/week-2">Week 2</Link></li>
          <li><Link href="/week-3">Week 3</Link></li> 
          <li><Link href="/week-4">Week 4</Link></li> 
          <li><Link href="/week-5">Week 5</Link></li> 
        </ul>
        </div>
    </div>
  </main>  );
}
