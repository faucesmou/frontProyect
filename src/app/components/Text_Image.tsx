import Image from 'next/image';

type TextImageProps = {
  text: string;
  imageSrc: string;
  href: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
};

export default function Text_Image({
  text,
  imageSrc,
  href,
  imageAlt = 'Logo',
  imageWidth = 70,
  imageHeight = 30,
}: TextImageProps) {
  
  return (
    <div className="w-full flex justify-center mt-2">
      <div className="flex items-center gap-2 text-[#767676]">
        <span>{text}</span>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className="object-contain"
          />
        </a>
      </div>
    </div>
  );
}
