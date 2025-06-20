# MoviesDatabase API Integration

## API Overview

Collection of information for movies, tv-shows, actors.
Include url, awards, full biography, and many other useful informations.
This api provides complete and updated data for over 9 million titles (movies, series and episodes) and 11 actors / crew and cast members.

Support developers <https:/>/www.buymeacoffee.com/SAdrian13>

## Version

v1

## Available Endpoints

| Method | Endpoint                             | Description                                         |
| ------ | ------------------------------------ | --------------------------------------------------- |
| GET    | `/titles`                            | Retrieve a list of movie and show titles.           |
| GET    | `/titles/{id}`                       | Get detailed information about a specific title.    |
| GET    | `/titles/{id}/ratings`               | Get ratings for a specific title.                   |
| GET    | `/titles/{id}/aka`                   | Get alternative titles (AKAs) for a specific title. |
| GET    | `/titles/{id}/crew`                  | Retrieve crew information for a specific title.     |
| GET    | `/titles/{id}/main_actor`            | Retrieve the main actor for a specific title.       |
| GET    | `/titles/series/{seriesId}`          | Get all seasons for a given series.                 |
| GET    | `/titles/seasons/{seriesId}`         | List all available seasons for a series.            |
| GET    | `/titles/series/{seriesId}/{season}` | Get episodes for a specific season of a series.     |
| GET    | `/titles/episode/{id}`               | Get information for a specific episode.             |
| GET    | `/titles/search/title/{title}`       | Search for titles by name.                          |
| GET    | `/titles/search/akas/{aka}`          | Search for titles by an alternative name.           |
| GET    | `/titles/search/keyword/{keyword}`   | Search for titles by keyword.                       |
| GET    | `/titles/x/upcoming`                 | Retrieve a list of upcoming titles.                 |
| GET    | `/titles/random`                     | Get a random movie or show title.                   |
| GET    | `/titles/x/titles-by-ids`            | Fetch multiple titles by their IDs.                 |
| GET    | `/titles/utils/genres`               | Get a list of available genres.                     |
| GET    | `/titles/utils/titleTypes`           | Get a list of title types (e.g., movie, TV show).   |
| GET    | `/titles/utils/lists`                | Retrieve curated lists of titles.                   |
| GET    | `/actors/{id}`                       | Get details about a specific actor.                 |
| GET    | `/actors/random`                     | Get a random actor profile.                         |
| GET    | `/actor`                             | Get a list of actors.                               |
| GET    | `Search by imdb id`                  | Search for a title using its IMDb ID.               |

## Request and Response Format

### Request

You must include your X-RapidApi-Key, X-nd Rapidapi-Host and Host in the headers.

**Example Request:**

```http
GET /titles/series/%7BseriesId%7D HTTP/1.1
X-Rapidapi-Key: YOUR_API_KEY
X-Rapidapi-Host: moviesdatabase.p.rapidapi.com
Host: moviesdatabase.p.rapidapi.com
```

### Response

Responses are in JSON format.

**Example Response:**

```json
{
  "results": [
    {
      "id": "tt1375666",
      "title": "Inception",
      "year": 2010,
      "genres": ["Action", "Sci-Fi", "Thriller"]
    }
  ]
}
```

### Authentication

Required Headers

X-RapidAPI-Key: YOUR_API_KEY
X-RapidAPI-Host: moviesdatabase.p.rapidapi.com

### Error Handling

The MoviesDatabase API follows standard HTTP status codes to indicate success or failure of requests. Handling errors correctly ensures a more reliable and user-friendly application.

### Common Error Codes

| Status Code               | Description                                                 | How to Handle                                             |
| ------------------------- | ----------------------------------------------------------- | --------------------------------------------------------- |
| 400 Bad Request           | The request is malformed or missing required parameters.    | Validate request data before sending.                     |
| 401 Unauthorized          | Missing or invalid API key.                                 | Ensure your API key is correct and included in headers.   |
| 403 Forbidden             | You don’t have permission to access the requested resource. | Check your RapidAPI subscription and endpoint access.     |
| 404 Not Found             | The requested resource does not exist.                      | Inform the user that the resource was not found.          |
| 429 Too Many Requests     | You have exceeded your usage quota or rate limits.          | Implement exponential backoff or wait before retrying.    |
| 500 Internal Server Error | A server-side error occurred.                               | Retry the request later or show a friendly error message. |

### Example Error Response

```json
{
  "message": "You have exceeded your rate limit"
}
### Usage Limits and Best Practices
```
