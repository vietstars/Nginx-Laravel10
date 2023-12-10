<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Builder;

trait HasActive
{
    /**
     * Boot the trait.
     *
     * @return void
     */
    public static function bootHasActive()
    {
        static::addGlobalScope('active', function (Builder $builder) {
            //add from to fix is_active ambiguous
            $builder->where("{$builder->getQuery()->from}.active", true);
        });
    }
}
