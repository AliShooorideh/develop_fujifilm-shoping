import Image from "next/image";
import { useRouter } from "next/router";

export default function yellow() {
  const router = useRouter();
  return (
    <div className="px-8 py-4">
      <div className="flex items-center justify-between">
        <div
          onClick={() => router.back()}
          className="rounded-md border border-[#fe5944] p-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#fe5944"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </div>
        <Image
          className="w-1/3 object-contain"
          loading="lazy"
          alt=""
          src={"/images/fujifilm-logo.png"}
          width="0"
          height="0"
          sizes="100vw"
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
      <div className="h-2 w-full border-b border-dashed border-gray-500" />
      <div className="flex flex-col items-center justify-center rounded-b-full py-10 shadow-xl">
        <Image
          className="w-1/2"
          src={"/images/02.png"}
          alt=""
          loading="lazy"
          width="0"
          height="0"
          sizes="100vw"
        />
        <button className="mt-5 rounded-b-full rounded-t-[5000px] bg-[#1d2125] px-14 py-3 font-bold text-white">
          Add
        </button>
      </div>
      <div className="mt-20 flex flex-col">
        <span className="text-3xl font-medium">
          instax<span className="font-bold"> mini 9</span>
        </span>
        <p className="mt-3 text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
          eveniet necessitatibus incidunt, sed totam et omnis beatae optio.
          Laborum reiciendis nemo ipsum corporis atque aperiam, ducimus corrupti
          sapiente doloribus nulla?
        </p>
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-gray-300 p-1">
          <span className="ml-8 text-4xl">
            $<span className="font-bold">50.99</span>
          </span>
          <button className="rounded-xl bg-[#ffc83e] p-4 text-2xl font-bold text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
