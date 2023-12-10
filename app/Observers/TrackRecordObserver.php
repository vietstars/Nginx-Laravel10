<?php

namespace App\Observers;

use Illuminate\Database\Eloquent\Model;

class TrackRecordObserver
{
    /**
     * Handle the Model "creating" event.
     *
     * @param  Illuminate\Database\Eloquent\Model  $model
     * @return void
     */
    public function creating(Model $model)
    {
        $model->system = \Constants::SYSTEM;
        $model->created_by = optional(auth()->user())->id;
    }

    /**
     * Handle the Model "updating" event.
     *
     * @param  Illuminate\Database\Eloquent\Model $model
     * @return void
     */
    public function updating(Model $model)
    {
        $model->system = \Constants::SYSTEM;
        $model->updated_by = optional(auth()->user())->id;
    }
}
