<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\AuthController;

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

Route::post('/take-auth', [ AuthController::class, 'setAuth']);

// Route::middleware('auth:sanctum')
//   ->as('v1.')
//   ->get('/user', function (Request $request) {
//     return $request->user();
//   }
// );

Route::group([
  'middleware' => 'auth:sanctum', 
  'as' => 'v1.'
], function () {
  Route::prefix('/users')
    ->as('users.')
    ->group(function () {

      Route::get('/all', [ AuthController::class, 'getAllUsers'])->name('get.list');

      Route::get('/whoami', function (Request $request) {
        return $request->user();
      })->name('get.my-info');
    }
  );
});




