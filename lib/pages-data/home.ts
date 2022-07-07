import { CardProps } from 'components/block/cards-grid/partials/CardProps';
import { CarouselItemProps } from 'components/block/text-with-media-carousel/partials/CarouselItemProps';
import { TimelineEntryProps } from 'components/block/timeline/TimelineProps';
import Camps from 'public/media/images/camps.jpg';
import Community from 'public/media/images/community.jpg';
import Donate from 'public/media/images/donate.jpg';
import Mentor from 'public/media/images/mentor.jpg';
import School from 'public/media/images/school.jpg';
import Soccer from 'public/media/images/soccer.jpg';
import Sponsor from 'public/media/images/sponsor.jpg';
import Tech from 'public/media/images/tech.jpg';
import Volunteer from 'public/media/images/volunteer.jpg';

const timelineEntries: Array<TimelineEntryProps> = [
  {
    date: '1994',
    title: 'timeline-title-one',
    description: 'timeline-description-one',
  },
  {
    date: '2007',
    title: 'timeline-title-two',
    description: 'timeline-description-two',
  },
  {
    date: '2005',
    title: 'timeline-title-three',
    description: 'timeline-description-three',
  },
  {
    date: '2012',
    title: 'timeline-title-four',
    description: 'timeline-description-four',
  },
  {
    date: '2017',
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
    title: 'volunteer',
    description: 'volunteer-description',
    linkText: 'contact-us',
    linkUrl: 'DETAILS_PATH + DETAILS_SECTIONS.contact',
  },
  {
    image: Donate,
    title: 'donate',
    description: 'donate-description',
    linkText: 'how-to-donate',
    linkUrl: 'DETAILS_PATH + DETAILS_SECTIONS.donate',
  },
  {
    image: Sponsor,
    title: 'sponsor',
    description: 'sponsor-description',
    linkText: 'contact-us',
    linkUrl: 'DETAILS_PATH + DETAILS_SECTIONS.contact',
  },
];

const activityCarouselItems: Array<CarouselItemProps> = [
  {
    image: Mentor,
    title: 'activity-one',
    description: 'activity-one-description',
  },
  {
    image: Soccer,
    title: 'activity-two',
    description: 'activity-two-description',
  },
  {
    image: Tech,
    title: 'activity-three',
    description: 'activity-three-description',
  },
  {
    image: Community,
    title: 'activity-four',
    description: 'activity-four-description',
  },
  {
    image: School,
    title: 'activity-five',
    description: 'activity-five-description',
  },
  {
    image: Camps,
    title: 'activity-six',
    description: 'activity-six-description',
  },
  {
    image: Community,
    title: 'activity-seven',
    description: 'activity-seven-description',
  },
];

export { timelineEntries, involvementCards, activityCarouselItems };