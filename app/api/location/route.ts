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

// import { Location } from "@/types/types";

// export const fetchLocation = async (search: string): Promise<Location[]> => {
  
//   if (search.length === 0) {
//     return [];
//   }
//   try {
//     const res = await fetch(
//       `https://geocode.search.hereapi.com/v1/geocode?q=${search}&apiKey=${process.env.HERE_API_KEY}`
//     );

//     if (!res.ok) {
//       throw new Error("Network response was not ok.");
//     }

//     const result = await res.json();

//     return result.items.map((item: {
//       title: string;
//       address: {
//         label: string;
//         street: string;
//         city: string;
//         state: string;
//         postalCode: string;
//       };
//     }) => ({
//       name: item.title,
//       label: item.address.label,
//       address: item.address.street,
//       city: item.address.city,
//       state: item.address.state,
//       postalCode: item.address.postalCode,
//     }));
//   } catch (error) {
//     console.error("Error fetching location:", error);
//     return [];
//   }
// };

