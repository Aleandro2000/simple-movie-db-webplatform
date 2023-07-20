<?php

namespace App\Services;

use App\Models\Movie;
use App\Models\Poster;

/**
 * Class MovieService.
 */
abstract class MovieService
{
    public static function storeMovie(array $movieData) {
        if(!Movie::query()->where("title", "==", $movieData["Title"])->first()) {
            Movie::query()->create([
                "title" => $movieData["Title"],
                "year" => $movieData["Year"],
            ]);
        }
    }
    
    public static function storePoster(array $movieData) {
        if (isset($movieData["Poster"]) && $movie = Movie::query()->where('title', $movieData['Title'])->first()) {
            Poster::query()->create([
                'movie_id' => $movie->id,
                'url' => $movieData['Poster'],
            ]);
        }
    }
}
