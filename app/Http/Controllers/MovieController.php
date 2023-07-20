<?php

namespace App\Http\Controllers;

use App\Services\MovieService;

class MovieController extends Controller
{
    public function fetchAndStoreMovies() {
        MovieService::fetchAndStoreMovies();
        return response()->json(["message" => "Movies fetched and stored successfully"]);
    }

    public function fetchMovies() {
        return response()->json([
            "message" => "Movies fetched succseefully",
            "result" => MovieService::fetchMovies(),
        ]);
    }

    public function fetchPosters() {
        return response()->json([
            "message" => "Posters fetched successfully",
            "result" => MovieService::fetchPosters(),
        ]);
    }
}
