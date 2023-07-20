<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Poster extends Model
{
    protected $table = "posters";
    protected $fillable = ["movie_id", "Poster"];

    public function movie() {
        return $this->belongsTo(Movie::class);
    }
}
