import { NextResponse, NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q");

    if (!query) {
      return NextResponse.json(
        { message: "Query parameter 'q' is required!" },
        { status: 400 },
      );
    }

    const response = await fetch(
      `${process.env.PUBLICROUTE}?apiKey=${process.env.HERE_API_KEY}&q=${query}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Something went wrong! Status: ${response.status} - ${errorText}`,
      );
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Error occurred:", error.message || error);
    return NextResponse.json(
      {
        message: "Internal Server Error",
        error: error.message || "Unknown error occurred",
      },
      { status: 500 },
    );
  }
};
