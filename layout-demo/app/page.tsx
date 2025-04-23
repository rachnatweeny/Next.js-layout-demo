import Image from "next/image";
import Link from "next/link";
import Button from "./components/button";

export default function Home() {
  return (
    <div>
      <Link href="/blog">Blog</Link> 
      <Image
      src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="Picture of the author"
      width={50}
      height={50}
    />
      
      
      
     



    </div>
  );
}

console.log(Home,"jhjhj")
