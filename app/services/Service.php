<?php

namespace App\Services;

class Service
{
    protected $model;

    public function getAll($select='*', $columns = false, $orderby=false, $parser=true, ...$selectRaw)
    {
        $model = $this->model->select($select);

        if ($columns) {
            array_map(function ($col) use (&$model, $columns) {
                $in = str_replace('[]', '', $col);
                $out = str_replace('[!]', '', $col);
                $or = str_replace('|', '', $col);
                $orIn = str_replace('[|]', '', $col);
                $orOut = str_replace('[|!]', '', $col);
                $and = str_replace('&', '', $col);
                $not = str_replace('!', '', $columns[$col]);
                if (is_string($columns[$col]) && strtolower($columns[$col]) === 'is null') {
                    $model = $model->where($col);
                } elseif ($col !== $out) {
                    $model = $model->whereNotIn($out, $columns[$col]);
                } elseif ($col !== $orOut) {
                    $model = $model->orWhereNotIn($orOut, $columns[$col]);
                } elseif ($col !== $in) {
                    $model = $model->whereIn($in, $columns[$col]);
                } elseif ($col !== $orIn) {
                    $model = $model->orWhereIn($orIn, $columns[$col]);
                } elseif ($col !== $or) {
                    if ($not === $columns[$col]) {
                        $model = $model->orWhere($or, $columns[$col]);
                    } else {
                        $model = $model->orWhere($or, '!=', $not);
                    }
                } elseif ($col !== $and) {
                    if ($not === $columns[$col]) {
                        $model = $model->where($col, $columns[$col]);
                    } else {
                        $model = $model->whereRaw(" `$and` != '$not'");
                    }
                } else {
                    if ($not === $columns[$col]) {
                        $model = $model->where($col, $columns[$col]);
                    } else {
                        $model = $model->where($col, '!=', $not);
                    }
                }
            }, array_keys($columns));
        }

        if ($orderby) {
            $model->orderByRaw($orderby);
        }

        if ($parser) {
            return $model->get();
        }

        return $model;
    }
}