import { MovieProps } from "@/interfaces";
import Image from "next/image";

const MovieCard: React.FC<MovieProps> = ({
  title,
  posterImage,
  releaseYear,
}) => {
  return (
    <div className="h-[563px]">
      <div>
        <Image
          src={posterImage}
          className="hover:cursor-pointer h-[430px] w-full rounded-md"
          alt={title}
          width={100}
          height={100}
        />
      </div>

      <div className="flex justify-between py-4">
        <p className="text-xl font-bold">{title}</p>
        <p className="text-xl text-[#e2d609]">{releaseYear}</p>
      </div>
    </div>
  );
};

export default MovieCard;
