import { db } from "@/lib/db";

export default async function  Home() {
  
  await db.set('hello', 'hello')

  return (
    <main className="h-[15rem] border-slate-900 w-[15rem] grid place-items-center">
      <p className="text-red-600">Hello World</p>
    </main>
  );
}
