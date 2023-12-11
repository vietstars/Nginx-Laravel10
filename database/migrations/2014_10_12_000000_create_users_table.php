<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->dateTime('last_login')->nullable();
            $table->text('google2fa_secret')->nullable();
            $table->boolean('active')->default(true);
            $table->integer('version')->default(1);
            $table->integer('system')->default(1);
            $table->foreignId('created_by')->nullable();
            $table->foreignId('updated_by')->nullable();
            $table->softDeletes();
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        });

        \DB::unprepared('
        CREATE TRIGGER users_version_trigger BEFORE UPDATE ON `users` FOR EACH ROW
            BEGIN
                SET New.version = Old.version + 1;
            END
        ');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        \DB::unprepared('DROP TRIGGER IF EXISTS users_version_trigger;');
        Schema::dropIfExists('users');
    }
};
