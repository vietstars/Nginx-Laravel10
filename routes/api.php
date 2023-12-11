<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\LanguageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/sign-in', [AuthController::class, 'setAuth']);
Route::get('/lg', [LanguageController::class, 'list']);
Route::post('/change-lg/{lg?}', [LanguageController::class, 'change']);


Route::group([
  'middleware' => 'auth:sanctum',
  'as' => 'v1.',
], function () {
    Route::prefix('/users')
      ->as('users.')
      ->group(
          function () {
          Route::get('/all', [AuthController::class, 'getAllUsers'])->name('get.list');

          Route::get('/whoami', function (Request $request) {
              return $request->user();
          })->name('get.my-info');
      }
      );
});
