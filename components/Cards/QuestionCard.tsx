import Link from "next/link";
import React from "react";
import RenderTag from "../shared/RenderTag";
import Metric from "../shared/Metric";
import {
  formatAndDivideNumber,
  getTimestamp,
} from "@/lib/utils";

interface QuestionProps {
  _id: string;
  title: string;
  tags: {
    _id: string;
    name: string;
  }[];
  author: {
    _id: string;
    name: string;
    picture: string;
  };
  upvotes: string;
  views: number;
  answers: Array<object>;
  createdAt: Date;
}

const QuestionCard = ({
  _id,
  title,
  tags,
  author,
  upvotes,
  views,
  answers,
  createdAt,
}: QuestionProps) => {
  return (
    <div className=" card-wrapper rounded-[10px] p-9 sm:px-11  ">
      <div className=" flex flex-col-reverse items-start justify-between gap-5 sm:flex-row ">
        <div className="  ">
          <span className=" subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden ">
            {getTimestamp(createdAt)}
          </span>
          <Link href={`/question/${_id}`}>
            <h3
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className="sm:h3-semibold text-dark700_light100 line-clamp-1 
            cursor-pointer hover:text-primary-500"
            >
              {title}
            </h3>
          </Link>
        </div>
      </div>
      <div className=" mt-3 flex flex-wrap gap-2  ">
        {tags.map((tag) => (
          <RenderTag
            key={tag._id}
            name={tag.name}
            _id={tag._id}
          />
        ))}
      </div>
      <div className=" flex-between mt-6 w-full flex-wrap gap-3  ">
        <Metric
          imgUrl="/assets/icons/avatar.svg"
          alt="user"
          value={author.name}
          title={` asked ${getTimestamp(createdAt)}`}
          href={`/profile/${author._id}`}
          isAuthor
          textStyles="body-medium text-dark400_light700"
        />

        <Metric
          imgUrl="/assets/icons/like.svg"
          alt="upvotes"
          value={formatAndDivideNumber(
            Number(upvotes)
          )}
          title=" votes"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/message.svg"
          alt="answers "
          value={formatAndDivideNumber(
            answers.length
          )}
          title=" Answers"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/eye.svg"
          alt="eye"
          value={formatAndDivideNumber(views)}
          title=" Views"
          textStyles="small-medium text-dark400_light800"
        />
      </div>
    </div>
  );
};

export default QuestionCard;
