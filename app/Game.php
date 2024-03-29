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


    /**
     * Game thumbnail path
     *
     * @var string
     */
    protected $thumbnail;


    /**
     * Get scores
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function scores() {
        return $this->hasMany('App\Score');
    }
}
