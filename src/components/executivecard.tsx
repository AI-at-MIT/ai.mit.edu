import Image from 'next/image'
export default function ExecutiveCard({ imageName, name, position }) {
    return (
      <div className="m-10 group rounded-full border border-transparent px-4 py-4 flex flex-col justify-center items-center">
        <div className="rounded-full overflow-hidden">
          <Image
            alt="Executive"
            src={imageName}
            width={150}
            height={150}
            quality={100}
          />
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-gray-500">{position}</p>
        </div>
      </div>
    );
  }