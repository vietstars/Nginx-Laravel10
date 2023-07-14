<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;

class HomeController extends Controller
{
  public function welcome()
  {
    \Debug::error('Error! hello every one');
    return view('welcome');
  }
}
