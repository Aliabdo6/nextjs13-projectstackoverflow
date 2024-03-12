import { SidebarLink } from "@/types";

export const themes = [
  {
    value: "light",
    label: "Light",
    icon: "/assets/icons/sun.svg",
  },
  {
    value: "dark",
    label: "Dark",
    icon: "/assets/icons/moon.svg",
  },
  {
    value: "system",
    label: "System",
    icon: "/assets/icons/computer.svg",
  },
];

// interface SidebarLink {
//   id?: number; // Optional ID property
//   imgURL: string;
//   route: string;
//   label: string;
// }

export const sidebarLinks: SidebarLink[] = [
  {
    id: 1,
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    id: 2,
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    id: 3,
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    id: 4,
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    id: 5,
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    id: 6,
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    id: 7,
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

// export const sidebarLinks: SidebarLink[] = [
//   {
//     imgURL: '/assets/icons/home.svg',
//     route: '/',
//     label: 'Home'
//   },
//   {
//     imgURL: '/assets/icons/users.svg',
//     route: '/community',
//     label: 'Community'
//   },
//   {
//     imgURL: '/assets/icons/star.svg',
//     route: '/collection',
//     label: 'Collections'
//   },
//   {
//     imgURL: '/assets/icons/suitcase.svg',
//     route: '/jobs',
//     label: 'Find Jobs'
//   },
//   {
//     imgURL: '/assets/icons/tag.svg',
//     route: '/tags',
//     label: 'Tags'
//   },
//   {
//     imgURL: '/assets/icons/user.svg',
//     route: '/profile',
//     label: 'Profile'
//   },
//   {
//     imgURL: '/assets/icons/question.svg',
//     route: '/ask-question',
//     label: 'Ask a question'
//   }
// ];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};
