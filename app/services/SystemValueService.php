<?php

namespace App\Services;

use App\Exceptions\AjaxFailException;
use App\Exceptions\AjaxVersionFailException;
use App\Models\SystemValue;
use Log;

class SystemValueService extends Service
{
    /**
     * [__construct description].
     * @param SystemValue $model [description]
     */
    public function __construct(SystemValue $systemValue)
    {
        $this->model = $systemValue;
    }

    public function getSystemByColumn($column = 'code', $value = 'page_title')
    {
        return $this->model->where($column, $value)->get();
    }

    public function getSystemByCode($code = 'page_title')
    {
        return $this->getSystemByColumn('code', $code);
    }

    public function getLangVersion()
    {
        return $this->getSystemByCode('version')->first()->name ?? 1;
    }

    public function create($attributes)
    {
        if (! $attributes->has('id')) {
            Log::error('missing id');
            throw new AjaxFailException();
        }

        if (! $attributes->has('version')) {
            Log::error('missing version');
            throw new AjaxVersionFailException();
        }

        $model = $this->model;

        $attributes->except(['id', 'version'])
          ->map(function ($value, $key) use (&$model) {
              $model->{$key} = $value;
          });

        $model->save();

        return $model;
    }

    public function upsertById($attributes, $isCheckIsActive = true)
    {
        try {
            if (! $attributes->has('id')) {
                Log::error('missing id');
                throw new AjaxFailException();
            }

            if (! $attributes->has('version')) {
                Log::error('missing version');
                throw new AjaxVersionFailException();
            }

            $model = $this->model;

            if ($attributes->get('id') !== 'add-new') {
                if (! $isCheckIsActive) {
                    $model = $model->withoutGlobalScope('active');
                }

                $model = $model->where('id', $attributes->get('id'))
                  ->where('version', $attributes->get('version'));

                $model = $model->first();

                if (empty($model)) {
                    throw new AjaxVersionFailException();
                }
            }

            $model->tag = 'lang';

            if (! empty($attributes->get('tag'))) {
                $model->tag = $attributes->get('tag');
            }

            $attributes->except(['id', 'version'])
              ->map(function ($value, $key) use (&$model) {
                  $model->{$key} = $value;
              });

            $model->save();

            return $model->refresh();
        } catch (\Illuminate\Database\QueryException $e) {
            \Log::error('updateById err');
            throw new AjaxFailException($e->getMessage(), 0, $e);
        }
    }

    public function deleteById($attributes)
    {
        try {
            $model = $this->model;
            $attributes->map(function ($value, $key) use (&$model) {
                $model = $model->where($key, $value);
            });
            $model = $model->first();

            if (empty($model)) {
                throw new AjaxVersionFailException();
            }

            return $model->delete();
        } catch (\Illuminate\Database\QueryException $e) {
            \Log::error('deleteById err');
            throw new AjaxFailException($e->getMessage(), 0, $e);
        }
    }
}
