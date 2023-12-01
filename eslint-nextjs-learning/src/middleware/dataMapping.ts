import { NextResponse } from "next/server";
import { dataMapping } from "@/activation/mapping";

export async function middleware() {
  return NextResponse.json(dataMapping);
}
