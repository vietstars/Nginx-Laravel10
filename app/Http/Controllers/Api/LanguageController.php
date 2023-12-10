<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LanguageController extends Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function change(Request $request)
    {
        if (! $request->ajax()) {
            return abort(404);
        }

        session(['locale' => $request->lg]);

        return $this->list($request);
    }

    public function list(Request $request)
    {
        if (! $request->ajax()) {
            return abort(404);
        }

        $locale = session('locale');
        if (empty($locale)) {
            session(['locale' => 'vn']);
        }

        $locales = $this->systemValue
            ->getSystemByColumn('tag', 'locales')
            ->pluck('name', 'code')->toArray();

        $common = $this->systemValue
            ->getSystemByColumn('tag', 'common')
            ->pluck('name', 'code')->toArray();

        if (!$locales) {
            $locales = [
                "vn" => "Vietnam",
                "us" => "United States",
                "jp" => "Japan",
                "cn" => "China",
                "kr" => "Korea",
            ];
        }
        session(['locales' => $locales]);

        $data = "";
        $selection = [
          "description", 
          "code", 
          "name",
        ];
        $where = [
            'tag' => 'lg_'.session('locale'),
        ];
        $orderBy = "`sorting` asc";

        $data = [
          '_lg' => $this->systemValue
            ->getAll($selection, $where, $orderBy, true)
            ->groupBy("name")
            ->map(function ($group) {
              return $group->pluck('description','code');
            }),
          '_locales' => $locales,
          '_common' => $common
        ];
        $data['_locales']['current'] = session('locale');

        $result = \Helpers::ajaxSuccessResponse($data);

        return response()->json($result);
    }
}
