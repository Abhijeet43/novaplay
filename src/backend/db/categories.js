import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

import { learning, lifeSkills, psychology, science, time } from "../../assets/";

export const categories = [
  {
    _id: uuid(),
    categoryName: "learning",
    description:
      "Learning is the process of acquiring new understanding, knowledge, behaviors, skills, values, attitudes, and preferences.",
    isFeatured: true,
    image: learning,
  },
  {
    _id: uuid(),
    categoryName: "life-skills",
    description:
      "Life skills are abilities for adaptive and positive behaviour that enable humans to deal effectively with the demands and challenges of life.",
    isFeatured: false,
    image: lifeSkills,
  },
  {
    _id: uuid(),
    categoryName: "time-management",
    description:
      "Time management is the process of planning and exercising conscious control of time spent on specific activities, especially to increase effectiveness, efficiency, and productivity.",
    isFeatured: true,
    image: time,
  },
  {
    _id: uuid(),
    categoryName: "psychology",
    description: "Psychology is the scientific study of mind and behavior.",
    isFeatured: true,
    image: psychology,
  },
  {
    _id: uuid(),
    categoryName: "science",
    description:
      "Science is a systematic enterprise that builds and organizes knowledge in the form of testable explanations and predictions.",
    isFeatured: false,
    image: science,
  },
];
