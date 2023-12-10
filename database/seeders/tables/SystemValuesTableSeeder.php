<?php

namespace Database\Seeders\Tables;

use Illuminate\Database\Seeder;

/**
 * SystemValues
 * This seed data
 *  in testing environment.
 *
 * @category   Database
 */
class SystemValuesTableSeeder extends Seeder
{
    use FileImportTrait;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('system_values')->truncate();
        $this->importFile('system_values.sql');
    }
}
