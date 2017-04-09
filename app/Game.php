<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Game extends Model
{

    /**
     * Game name
     *
     * @var string
     */
    protected $name;


    /**
     * Game description
     *
     * @var string
     */
    protected $description;


    /**
     * Game version
     *
     * @var integer
     */
    protected $version;
}
