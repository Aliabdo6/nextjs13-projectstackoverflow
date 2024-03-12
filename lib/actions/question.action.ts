"use server";

import Question from "@/database/question.model";
import { connectToDatabase } from "../mongoose";
import Tag from "@/database/tag.model";
import {
  CreateQuestionParams,
  GetQuestionsParams,
} from "./shared.types";
import User from "@/database/user.model";
import { revalidatePath } from "next/cache";

export async function getQuestions(
  params: GetQuestionsParams
) {
  // make an async call to the api > get questions
  try {
    connectToDatabase();
    const questions = await Question.find({})
      .populate({ path: "tags", model: Tag })
      .populate({ path: "author", model: User })
      .sort({ createdAt: -1 });
    return { questions };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createQuestion(
  params: CreateQuestionParams
) {
  // make an async to the api > create question
  // contain all the form values
  // navigate to the home page
  // eslint-disable-next-line no-empty
  try {
    connectToDatabase();
    const { title, content, tags, author, path } =
      params;
    const question = await Question.create({
      title,
      content,
      author,
    });

    const tagDocuments = [];
    // create tags or get the existing ones
    for (const tag of tags) {
      const existingTag =
        await Tag.findOneAndUpdate(
          {
            name: {
              $regex: new RegExp(`^${tag}$`, "i"),
            },
          },
          {
            $setOnInsert: { name: tag },
            $push: { questions: question._id },
          },
          { upsert: true, new: true }
        );
      tagDocuments.push(existingTag._id);
    }
    await Question.findByIdAndUpdate(
      question._id,
      {
        $push: { tags: { $each: tagDocuments } },
      }
    );

    // create an interaction record for the user`s ask_question action
    revalidatePath(path);
  } catch (error) {}
}
