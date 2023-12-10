<?php

namespace Database\Seeders\Tables;

use Illuminate\Database\Seeder;

/**
 * Users
 * This seed data
 *  in testing environment.
 *
 * @category   Database
 */
class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('users')->truncate();

        \App\Models\User::factory(10)->create();
        \App\Models\User::factory()->create([
            'name' => 'Ben Thai',
            'email' => 'vietstar.nt@gmail.com',
            'email_verified_at' => now(),
            'password' => '$2y$10$DxEQwoz4jolOg9VcuVOQe.Dpeb1cNkWDUc1uo05Yt4aY0COvFDzc2',
            'active' => 1,
        ]);
    }
}
