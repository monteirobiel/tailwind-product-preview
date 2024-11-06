import Image from "next/image";
import img from "./images/image-product-desktop.jpg";

export default function Home() {
  return (
    <main>
      <div className="bg-bg h-screen w-screen flex justify-center items-center ">
        <div className="bg-black h-h1 w-w1"></div>
        <div className="bg-white h-h1 w-w1  ">
          <div className="p-6 -tracking-tighter text-sm font-font1">
            PERFUME
          </div>
          <div className="text-3xl w-56 pl-5 font-font1 font-bold">
            Gabrielle Essence Eau De Parfum
          </div>
          <div className="pt-7 text-desc w-64 pl-5 font-font2 ">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.{" "}
          </div>
          <div className="flex pt-5">
            <span className="text-4xl text-price pl-5 font-font1 font-bold ">
              $149.99
            </span>
            <span className="text-lg pl-4 pt-2 line-through text-desc font-font1 font-semibold">
              $169.99
            </span>
          </div>
          <div>
            <button className="bg-price ml-7 mt-8 w-64 h-11 rounded-2xl text-white font-font2 font-semibold hover:hover:bg-hover duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
