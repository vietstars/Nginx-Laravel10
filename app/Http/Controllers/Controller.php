<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
USE App\Services\SystemValueService;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public $systemValue;

    public function __construct()
    {
        $this->systemValue = app(SystemValueService::class);
        // $lgVer = $this->systemValue->getLangVersion();
    }
}
