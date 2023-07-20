<?php

namespace App\Http\Controllers;

use App\Services\MovieService;
use Illuminate\Support\Facades\Http;

class MovieController extends Controller
{
    public function fetchAndStoreMovies() {
        $urls = [
            "http://www.omdbapi.com/?s=Matrix&apikey=720c3666",
            "http://www.omdbapi.com/?s=Matrix%20Reloaded&apikey=720c3666",
            "http://www.omdbapi.com/?s=Matrix%20Revolutions&apikey=720c3666",
        ];
        foreach($urls as $url) {
            $response = Http::get($url);
            if ($response->successful()) {
                $data = $response->json();
                if (isset($data["Search"]) && is_array($data["Search"])) {
                    foreach($data["Search"] as $movieData) {
                        MovieService::storeMovie($movieData);
                        MovieService::storePoster($movieData);
                    }
                }
            }
        }
        return response()->json(['message' => 'Movies fetched and stored successfully']);
    }
}
