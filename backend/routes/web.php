<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('/user/login', function () {
    return view('welcome');
});

Route::post('/user/register', function () {
    return view('welcome');
});

Route::get('/user/get-profile', function () {
    return view('welcome');
});

Route::get('/search', function () {
    return view('welcome');
});

Route::post('/teams/create-team', function () {
    return view('welcome');
});

Route::get('/teams/get-my-teams', function () {
    return view('welcome');
});

Route::get('/invites/get-current-invites', function () {
    return view('welcome');
});

Route::post('/invites/accept-invite', function () {
    return view('welcome');
});

Route::post('/invites/decline-invites', function () {
    return view('welcome');
});

Route::get('/test', function () {
    return view('welcome');
});

