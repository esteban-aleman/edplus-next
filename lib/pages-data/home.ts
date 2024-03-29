import { CardProps } from 'components/block/cards-grid/partials/CardProps';
import { CarouselItemProps } from 'components/block/text-with-media-carousel/partials/CarouselItemProps';
import { TimelineEntryProps } from 'components/block/timeline/TimelineProps';
import { DETAILS_PATH, DETAILS_SECTIONS } from 'lib/utils/constants';
import Camps from 'public/media/images/camps.jpeg';
import Community from 'public/media/images/community.jpeg';
import Donate from 'public/media/images/donate.jpeg';
import Mentor from 'public/media/images/mentor.jpg';
import School from 'public/media/images/school.jpeg';
import Soccer from 'public/media/images/soccer.jpeg';
import Sponsor from 'public/media/images/sponsor.jpg';
import Tech from 'public/media/images/tech.jpg';
import Volunteer from 'public/media/images/volunteer.png';
import Xmas from 'public/media/images/xmas.jpeg';

const timelineEntries: Array<TimelineEntryProps> = [
  {
    date: '1994',
    title: 'timeline-title-one',
    description: 'timeline-description-one',
  },
  {
    date: null, //2007
    title: 'timeline-title-two',
    description: 'timeline-description-two',
  },
  // {
  //   date: '2005',
  //   title: 'timeline-title-three',
  //   description: 'timeline-description-three',
  // },
  {
    date: null,
    title: 'timeline-title-four',
    description: 'timeline-description-four',
  },
  {
    date: null, //'2011'
    title: 'timeline-title-five',
    description: 'timeline-description-five',
  },
  {
    date: 'today',
    title: 'timeline-title-six',
    description: 'timeline-description-six',
  },
];

const involvementCards: Array<CardProps> = [
  {
    image: Volunteer,
    imageAlt: 'volunteer-image-alt',
    title: 'volunteer',
    description: 'volunteer-description',
    linkText: 'contact-us',
    linkUrl: DETAILS_PATH + DETAILS_SECTIONS.contact,
  },
  {
    image: Donate,
    imageAlt: 'donate-card-image-alt',
    title: 'donate',
    description: 'donate-description',
    linkText: 'how-to-donate',
    linkUrl: DETAILS_PATH + DETAILS_SECTIONS.donate,
  },
  {
    image: Sponsor,
    imageAlt: 'sponsor-image-alt',
    title: 'sponsor',
    description: 'sponsor-description',
    linkText: 'contact-us',
    linkUrl: DETAILS_PATH + DETAILS_SECTIONS.contact,
  },
];

const activityCarouselItems: Array<CarouselItemProps> = [
  {
    image: Mentor,
    imageAlt: 'activity-one-image-alt',
    title: 'activity-one',
    description: 'activity-one-description',
  },
  {
    image: School,
    imageAlt: 'activity-two-image-alt',
    title: 'activity-two',
    description: 'activity-two-description',
  },
  {
    image: Soccer,
    imageAlt: 'activity-three-image-alt',
    title: 'activity-three',
    description: 'activity-three-description',
  },
  {
    image: Tech,
    imageAlt: 'activity-four-image-alt',
    title: 'activity-four',
    description: 'activity-four-description',
  },
  {
    image: Xmas,
    imageAlt: 'activity-five-image-alt',
    title: 'activity-five',
    description: 'activity-five-description',
  },
  {
    image: Community,
    imageAlt: 'activity-six-image-alt',
    title: 'activity-six',
    description: 'activity-six-description',
  },
  {
    image: Camps,
    imageAlt: 'activity-seven-image-alt',
    title: 'activity-seven',
    description: 'activity-seven-description',
  },
];

export { timelineEntries, involvementCards, activityCarouselItems };
