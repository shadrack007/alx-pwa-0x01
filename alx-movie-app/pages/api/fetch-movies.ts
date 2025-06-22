import { MoviesProps } from "@/interfaces";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "POST") {
    const { year, page, genre } = request.body;

    const date = new Date();

    const actualYear = year || date.getFullYear();

    const queryParams = new URLSearchParams({
      year: actualYear.toString(),
      sort: "year.decr",
      limit: "12",
      page: page.toString(),
    });

    if (genre) {
      queryParams.append("genre", genre);
    }

    const url = `https://moviesdatabase.p.rapidapi.com/titles?${queryParams.toString()}`;

    const resp = await fetch(url, {
      headers: {
        "x-rapidapi-key": `${process.env.MOVIE_API_KEY}`,
      },
    });

    console.log("response", resp);

    if (!resp.ok) throw new Error("Failed to fetch movies");

    const moviesResponse = await resp.json();
    const movies: MoviesProps[] = moviesResponse.results;

    return response.status(200).json({
      movies,
    });
  } else {
    response.setHeader("Allow", ["POST"]);
    response.status(405).end(`Method ${request.method} Not Allowed in here`);
  }
}
