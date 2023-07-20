<?php

namespace App\Http\Controllers;

use App\Services\MovieService;

class MovieController extends Controller
{
    public function fetchAndStoreMovies()
    {
        return response()->json([
            "message" => "Movies fetched and stored successfully",
            "result" => [
                "button1" => MovieService::fetchAndStoreMovies(("http://www.omdbapi.com/?s=Matrix&apikey=720c3666")),
                "button2" => MovieService::fetchAndStoreMovies(("http://www.omdbapi.com/?s=Matrix%20Reloaded&apikey=720c3666")),
                "button3" => MovieService::fetchAndStoreMovies(("http://www.omdbapi.com/?s=Matrix%20Revolutions&apikey=720c3666")),
            ],
        ]);
    }

    public function fetchMovies()
    {
        return response()->json([
            "message" => "Movies fetched succseefully",
            "result" => MovieService::fetchMovies(),
        ]);
    }

    public function fetchPosters()
    {
        return response()->json([
            "message" => "Posters fetched successfully",
            "result" => MovieService::fetchPosters(),
        ]);
    }
}
