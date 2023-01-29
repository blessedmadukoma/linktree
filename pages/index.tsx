import Image from "next/image";
import data from "../data.json";

function LinkCard({
  url,
  title,
  image,
}: {
  url: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={url}
      className="flexx items-center p-1 rounded-md w-full border border-gray-300 mb-3 hover:scale-105 transition-all"
    >
      <div className="flex text-center w-full">
        {image && (
          <Image
            className="rounded-md"
            alt={title}
            src={image}
            width={40}
            height={40}
          />
        )}
        <h2 className="font-semibold w-full text-center">{title}</h2>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex mx-auto w-full flex-col items-center mt-16 px-8">
      <Image
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="font-semibold mt-4 text-xl mb-8">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.url} {...link} />
      ))}
    </div>
  );
}
