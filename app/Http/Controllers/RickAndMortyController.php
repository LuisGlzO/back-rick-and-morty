<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\character;

class RickAndMortyController extends Controller
{
    public function index()
    {
        return character::all();
    }

    public function store(Request $request)
    {
        $character = character::create($request->all());
        return response()->json($character, 201);
    }

    public function show(character $character)
    {
        return $character;
    }

    public function update(Request $request, character $character)
    {
        $character->update($request->all());
        return response()->json($character, 200);
    }

    public function destroy(character $character)
    {
        $character->delete();
        return response()->json(null, 204);
    }
}
