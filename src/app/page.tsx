import Image from "next/image";
import heroIcon from "../../public/hero-graphics.svg";
export default function Home() {
  return (
    <main className="bg-black flex min-h-screen flex-row items-center justify-center p-24 gap-5 flex-wrap">
      <p className="font-extrabold text-4xl bg-yellow-200 text-red-700">
        Stay Tune We are coming Soon !!!!
      </p>
      <Image
        className="md:order-2 object-cover ml-auto animate-updown"
        src={heroIcon}
        width={500}
        height={500}
        alt="Banner"
      />
    </main>
  );
}
