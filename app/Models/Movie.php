<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    protected $table = "movies";
    protected $fillable = ["Title", "Year", "imdbID", "Type"];

    public function poster() {
        return $this->hasOne(Poster::class, "movie_id");
    }
}
