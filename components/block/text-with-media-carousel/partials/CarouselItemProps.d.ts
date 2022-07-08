export type CarouselItemProps = {
  image: StaticImageData | string;
  imageAlt: string;
  title: string;
  description: string;
  ariaLabel?: string;
  id?: string;
  active?: boolean;
};
