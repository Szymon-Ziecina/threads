"use server";

import { revalidatePath } from "next/cache";
import Thread from "../models/thread.model";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";

interface Params {
  text: string;
  autor: string;
  communityId: string | null;
  path: string;
}

export async function createThread({ text, autor, communityId, path }: Params) {
  try {
    connectToDB();
    const createdThread = await Thread.create({
      text,
      autor,
      community: null,
    });

    await User.findByIdAndUpdate(autor, {
      $push: { threads: createdThread._id },
    });

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to create thread: ${error}`);
  }
}
