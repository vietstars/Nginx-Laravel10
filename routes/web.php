<?php

use App\Http\Controllers\Client\HomeController;
use Illuminate\Support\Facades\Route;
use Vietstars\LogsViewer\LogsViewerController;

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

Route::get('logs', [LogsViewerController::class, 'index']);

Route::get('myadmin', function () {
    return redirect()->to('http://it4todays.org:8080');
});


$admGroup['domain'] = config('app.admin_url');
$group['domain'] = config('app.url');

Route::group($group, function () {
    Route::get('/', [HomeController::class, 'portal']);
    Route::get('/{routes}', [HomeController::class, 'portal'])
      ->where('routes', '(portal|sign-in|sign-up|market)');
});

// Route::group($admGroup, function () {
//     Route::middleware('auth:sanctum')->group(function () {
//         Route::get('/', [DashboardController::class, 'pỏtal'])->name('dashboard.home');
//         Route::get('/{routes}', [DashboardController::class, 'index'])
//               ->where('routes', '(language|logout)');
//     });
//     Route::get('/login', [DashboardController::class, 'index'])->name('auth.login');
// });