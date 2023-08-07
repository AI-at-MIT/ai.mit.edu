import Image from "next/image";
export default function ExecutiveCard({ imageName, name, position } : {imageName: string, name: string, position: string}) {
  return (
    <div className="m-10 group rounded-full border border-transparent px-4 py-4 flex flex-col items-center w-[250px] h-[350px]">
      <div className="rounded-full overflow-hidden">
        <Image
          alt="Executive"
          src={imageName}
          width={150}
          height={150}
          quality={100}
          style={{ filter: "grayscale(100%)" }}
        />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-xxl font-semibold">{name}</h3>
        <p className="text-xl text-gray-500">{position}</p>
      </div>
    </div>
  );
}
