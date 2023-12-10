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
        Schema::create('system_values', function (Blueprint $table) {
            $table->id();
            $table->string('tag', 50);
            $table->string('code', 50);
            $table->string('name')->nullable();
            $table->mediumText('option_1')->nullable();
            $table->mediumText('option_2')->nullable();
            $table->mediumText('option_3')->nullable();
            $table->mediumText('option_4')->nullable();
            $table->mediumText('description')->nullable();
            $table->integer('sorting')->default(1);
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
        CREATE TRIGGER system_values_version_trigger BEFORE UPDATE ON `system_values` FOR EACH ROW
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
        \DB::unprepared('DROP TRIGGER IF EXISTS system_values_version_trigger;');
        Schema::dropIfExists('system_values');
    }
};
