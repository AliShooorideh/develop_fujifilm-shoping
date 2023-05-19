import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-hidden px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="rounded-full bg-[#fe5944] p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#fff"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <Image
          className="w-1/3 object-contain"
          src={"/images/fujifilm-logo.png"}
          loading="lazy"
          width="0"
          height="0"
          sizes="100vw"
          alt=""
        />
        <div className="rounded-full bg-[#1d2125] p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#fff"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </div>
      </div>
      <div className="mb-4 h-2 w-full border-b border-dashed border-gray-500" />
      <div className="relative flex w-full flex-col items-start rounded-xl bg-[#a6d3f2] p-4 py-7">
        <span className="text-3xl font-bold text-white">10% Discount</span>
        <span className="mt-4 w-44 text-xl font-semibold text-white">
          Grab yours one Today
        </span>
        <button className="mt-4 rounded-xl bg-white px-8 py-3 text-[#a6d3f2] shadow-lg">
          Explore
        </button>
        <Image
          className="absolute -right-5 bottom-5 w-1/3 -rotate-[25deg] object-contain"
          src={"/images/01.png"}
          loading="lazy"
          width="0"
          height="0"
          sizes="100vw"
          alt=""
        />
        <Image
          className="absolute right-2 top-1 w-1/4 rotate-[25deg] object-contain"
          src={"/images/01.png"}
          loading="lazy"
          width="0"
          height="0"
          sizes="100vw"
          alt=""
        />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-2xl font-medium">fujifilm</span>
          <span className="text-3xl font-bold">Cameras</span>
        </div>
        <div className="flex items-center space-x-2 rounded-xl bg-[#1d2125] px-4 py-5">
          <button className="font-bold text-white">Search</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#fff"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
      <div className="mt-5 flex flex-col space-y-4 pr-5">
        <Link href={"/yellow"}>
          <div className="relative flex w-full flex-col items-start rounded-xl bg-[#f7d88c] p-4 py-7">
            <span className="text-2xl text-white">limited Edition</span>
            <span className="text-xl text-white">
              instax<span className="font-bold"> mini 9</span>
            </span>
            <span className="mt-2 text-3xl text-white">
              $<span className="font-bold">50.99</span>
            </span>
            <button className="mt-5 rounded-3xl bg-white py-5 px-10 text-[#f7d88c] shadow-lg">
              Buy
            </button>
            <Image
              className="absolute -right-5 top-10 w-36 translate-x-2 object-contain"
              alt=""
              src={"/images/02.png"}
              width="0"
              height="0"
              sizes="100vw"
              loading="lazy"
            />
          </div>
        </Link>
        <div className="relative flex w-full flex-col items-start rounded-xl bg-[#afc4a8] p-4 py-7">
          <span className="text-2xl text-white">limited Edition</span>
          <span className="text-xl text-white">
            instax<span className="font-bold"> mini 9</span>
          </span>
          <span className="mt-2 text-3xl text-white">
            $<span className="font-bold">50.99</span>
          </span>
          <button className="mt-5 rounded-3xl bg-white py-5 px-10 text-[#afc4a8] shadow-lg">
            Buy
          </button>
          <Image
            className="absolute -right-5 top-0 w-36 translate-y-1/2 translate-x-2 object-contain"
            loading="lazy"
            src={"/images/03.png"}
            alt=""
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  );
}
