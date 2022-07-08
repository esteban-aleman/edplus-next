import { Detail } from 'components/block/details-list/DetailsListProps';
import { StaticImageData } from 'next/image';
import Contact from 'public/media/images/contact.jpg';
import Donate from 'public/media/images/donate.jpg';
import Mission from 'public/media/images/mission.jpg';
import Vision from 'public/media/images/vision.jpg';

export type Sections = {
  [dynamicKey: string]: {
    title: string;
    description?: string;
    image: StaticImageData | string;
    imageAlt: string;
    details?: Array<Detail>;
  };
};

const sections: Sections = {
  contact: {
    title: 'contact-us',
    image: Contact,
    imageAlt: 'contact-image-alt',
    details: [
      {
        title: 'address-title',
        text: 'address',
      },
      {
        title: 'email-title',
        text: 'edplus@edplus.or.cr',
      },
      {
        title: 'phone-title',
        text: '+506 2227 8642',
      },
    ],
  },
  mission: {
    title: 'mission-title',
    description: 'mission-details',
    image: Mission,
    imageAlt: 'mission-image-alt',
  },
  vision: {
    title: 'vision-title',
    description: 'vision-details',
    image: Vision,
    imageAlt: 'vision-image-alt',
  },
  donate: {
    title: 'donate-title',
    description: 'donate-details',
    image: Donate,
    imageAlt: 'donate-image-alt',
    details: [
      {
        title: 'promerica-bank',
        text: 'CR000000000000',
      },
      {
        title: 'bcr-bank',
        text: 'CR000000000000',
      },
      {
        title: 'sinpe-mobile',
        text: '+506 2227 8642',
      },
    ],
  },
};

export { sections };
