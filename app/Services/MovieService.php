<?php

namespace App\Services;

use App\Models\Movie;
use App\Models\Poster;
use Illuminate\Support\Facades\Http;

/**
 * Class MovieService.
 */
abstract class MovieService
{
    public static function storeMovie(array $movieData)
    {
        if (!Movie::query()->where("title", "==", $movieData["Title"])->first()) {
            Movie::query()->create([
                "title" => $movieData["Title"],
                "year" => $movieData["Year"],
            ]);
        }
    }

    public static function storePoster(array $movieData)
    {
        if (isset($movieData["Poster"]) && $movie = Movie::query()->where("title", $movieData["Title"])->first()) {
            Poster::query()->create([
                "movie_id" => $movie->id,
                "url" => $movieData["Poster"],
            ]);
        }
    }

    public static function fetchAndStoreMovies(string $url)
    {
        $response = Http::get($url);
        if ($response->successful()) {
            $data = $response->json();
            if (isset($data["Search"]) && is_array($data["Search"])) {
                foreach ($data["Search"] as $movieData) {
                    MovieService::storeMovie($movieData);
                    MovieService::storePoster($movieData);
                }
            }
            return $data["Search"];
        }
        return null;
    }

    public static function fetchMovies()
    {
        return Movie::all();
    }

    public static function fetchPosters()
    {
        return Poster::all();
    }
}
