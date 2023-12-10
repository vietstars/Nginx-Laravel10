<?php

namespace App\Traits;

use App\Observers\TrackRecordObserver;
use Illuminate\Database\Eloquent\Builder;

trait TrackRecord
{
    /**
     * Boot the trait.
     *
     * @return void
     */
    public static function bootTrackRecord()
    {
        static::addGlobalScope('system', function (Builder $builder) {
            $builder->where("{$builder->getQuery()->from}.system", \Constants::SYSTEM);
        });
        static::observe(TrackRecordObserver::class);
    }
}
