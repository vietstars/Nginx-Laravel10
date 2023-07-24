<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;

class HomeController extends Controller
{
  public function initApp()
  {
    return view('initial-app');
  }

  public function welcome()
  {
    \Debug::error('Error! hello every one');
    return view('welcome');
  }
}
