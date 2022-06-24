import {
  DETAILS_PATH,
  DETAILS_SECTIONS,
  TARGET_BLANK,
} from 'lib/utils/constants';
import { FooterProps } from './FooterProps';

const mockFooterProps: FooterProps = {
  columns: [
    {
      title: 'links',
      links: [
        {
          text: 'contact-us',
          href: DETAILS_PATH + DETAILS_SECTIONS.contact,
        },
        {
          text: 'how-to-donate',
          href: DETAILS_PATH + DETAILS_SECTIONS.donate,
        },
        {
          text: 'mission-title',
          href: DETAILS_PATH + DETAILS_SECTIONS.mission,
        },
        {
          text: 'vision-title',
          href: DETAILS_PATH + DETAILS_SECTIONS.vision,
        },
      ],
    },
    {
      title: 'social-network',
      links: [
        {
          text: 'Facebook',
          target: TARGET_BLANK,
          href: 'https://www.facebook.com/educacionplus/',
        },
        {
          text: 'Instagram',
          target: TARGET_BLANK,
          href: 'https://instagram.com/educacion_plus',
        },
      ],
    },
  ],
};

export { mockFooterProps };
