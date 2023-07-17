<?php

use Illuminate\Support\Facades\Route;

use Vietstars\LogsViewer\LogsViewerController;

use App\Http\Controllers\Client\HomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [HomeController::class, 'welcome']);

Route::get('logs', [LogsViewerController::class, 'index']);

Route::get('s', function () {
  return redirect()->to('http://dev.org:8080');
});
