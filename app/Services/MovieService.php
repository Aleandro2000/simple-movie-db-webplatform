<?php

namespace App\Services;

use App\Models\Movie;
use Illuminate\Support\Facades\Http;

/**
 * Class MovieService.
 */
abstract class MovieService
{
    public static function storeMovie(array $movieData)
    {
        if (!Movie::query()->where("imdbID", $movieData["imdbID"])->first()) {
            Movie::query()->create([
                "Title" => $movieData["Title"],
                "Year" => $movieData["Year"],
                "imdbID" => $movieData["imdbID"],
                "Type" => $movieData["Type"],
                "Poster" => $movieData["Poster"],
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
}
