import { connectDB } from "@/lib/mongodb";
import Note from "@/models/Note";
import { NextResponse } from "next/server";

export async function DELETE(_, { params }) {
  await connectDB();
  await Note.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
