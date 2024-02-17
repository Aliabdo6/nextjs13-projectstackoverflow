import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

// eslint-disable-next-line no-unused-vars
const hotQuestions = [
  {
    _id: 1,
    titel: "What is the capital of France?",
  },
  {
    _id: 2,
    titel: "Who wrote 'To Kill a Mockingbird'?",
  },
  {
    _id: 3,
    titel:
      "What is the chemical symbol for water?",
  },
  {
    _id: 4,
    titel: "In which year did World War II end?",
  },
  {
    _id: 5,
    titel: "Who painted the Mona Lisa?",
  },
];

const popularTag = [
  { _id: 1, name: "Python", totalQuestions: 10 },
  {
    _id: 2,
    name: "JavaScript",
    totalQuestions: 8,
  },
  { _id: 3, name: "Java", totalQuestions: 12 },
  { _id: 4, name: "C++", totalQuestions: 7 },
  { _id: 5, name: "Ruby", totalQuestions: 6 },
];

const RightSidebar = () => {
  return (
    <section
      // eslint-disable-next-line tailwindcss/classnames-order
      className="background-light900_dark200 light-border
    sticky right-0 top-0 flex h-screen flex-col  
     overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none 
      max-xl:hidden w-[350px]  custom-scrollbar"
    >
      <div className="  ">
        <h3 className="h3-bold  text-dark200_light900 ">
          Top Questions❓
        </h3>
        <div className=" mt-7 flex w-full flex-col gap-[30px] ">
          {hotQuestions.map((question) => (
            <Link
              href={`/question/${question._id}`}
              key={question._id}
              className=" flex cursor-pointer items-center justify-between  gap-7 "
            >
              <p className=" body-medium text-dark500_light700 ">
                {question.titel}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold  text-dark200_light900 ">
          Populat Tags
        </h3>
        <div className=" mt-7 flex flex-col gap-4 ">
          {popularTag.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
