import Image from "next/image";

type ButtonDynProps = {
  label: string;
  image: string;
  onClick?: () => void;
};

export default function ButtonDyn({ label, image, onClick }: ButtonDynProps) {
  return (
    <button className="group relative text-lg px-4 cursor-pointer" onClick={onClick}>
  
    <div
      className="
        absolute
        inset-0
        flex
        items-center
        justify-center
        pointer-events-none
        z-0
      "
    >
      <Image
        src={image}
        alt=""
        width={50}
        height={50}
        className="
          opacity-0
          group-hover:opacity-20
          mt-1
        "
      />
    </div>

    <span className="relative z-10">
      {label}
    </span>

  </button>
  );
}