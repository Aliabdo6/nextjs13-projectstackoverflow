import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: 1,
    title: "Introduction to Machine Learning",
    tags: [
      { _id: 1, name: "machine learning" },
      { _id: 2, name: "artificial intelligence" },
    ],
    author: "John Doe",
    upvotes: 25,
    views: 500,
    answers: 5,
    createdAt: "2024-02-18T08:30:00.000Z",
  },
  {
    _id: 2,
    title: "React vs Vue: Which One to Choose?",
    tags: [
      { _id: 3, name: "javascript" },
      { _id: 4, name: "react" },
      { _id: 5, name: "vue" },
    ],
    author: "Jane Smith",
    upvotes: 40,
    views: 800,
    answers: 8,
    createdAt: "2024-01-15T15:45:00.000Z",
  },
  {
    _id: 3,
    title:
      "Data Structures and Algorithms Basics",
    tags: [
      { _id: 6, name: "data structures" },
      { _id: 7, name: "algorithms" },
    ],
    author: "Alex Johnson",
    upvotes: 15,
    views: 300,
    answers: 3,
    createdAt: "2024-03-05T10:20:00.000Z",
  },
  {
    _id: 4,
    title: "Getting Started with Python",
    tags: [
      { _id: 8, name: "python" },
      { _id: 9, name: "programming" },
    ],
    author: "Sarah Brown",
    upvotes: 30,
    views: 600,
    answers: 6,
    createdAt: "2024-04-10T09:00:00.000Z",
  },
  {
    _id: 5,
    title: "Understanding Blockchain Technology",
    tags: [
      { _id: 10, name: "blockchain" },
      { _id: 11, name: "cryptocurrency" },
    ],
    author: "Michael Clark",
    upvotes: 20,
    views: 400,
    answers: 4,
    createdAt: "2024-05-20T14:15:00.000Z",
  },
];

export default function Home() {
  return (
    <>
      <div className=" flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center ">
        <h1 className=" h1-bold text-dark100_light900  ">
          All Questions{" "}
        </h1>
        <Link
          href="/ask-question"
          className=" flex justify-end max-sm:w-full "
        >
          <Button
            className=" primary-gradient min-h-[46px] px-4 py-3 
          !text-light-900  "
          >
            Ask a Question{" "}
          </Button>
        </Link>
      </div>
      <div className=" mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center ">
        <LocalSearchBar
          route="/"
          iconPosition="right"
          imgSrc="/assets/icons/search.svg"
          placeholder="search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses=" min-h-[56px] sm:min-w-[170px] "
          containerClasses="hidden max-md:flex "
        />
      </div>
      <HomeFilters />
      <div className=" mt-10 flex w-full flex-col gap-6  ">
        {/* {looping through Questions} */}
        {questions.length > 0 ? (
          questions.map(
            (question) => "QustionCard"
          )
        ) : (
          <NoResult
            title="Thers is no Questions to show 👀"
            description="Be the first to break the silence ! 🤞🔔
        Ask a Question and kickstart the
        discussion . our Query could be the next
        big thing others learn from . Get
        involved✨✨"
            link="/ask-question"
            linkTitle="ask a Question"
          />
        )}
      </div>
    </>
  );
}
