<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class PopulateRoleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('roles')->insert(
            array(
                'name' => 'super_nasty',
                'description' => 'Super Nasty overpowered user!'
            )
        );


        DB::table('roles')->insert(
            array(
                'name' => 'nasty',
                'description' => 'Nasty user!'
            )
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
