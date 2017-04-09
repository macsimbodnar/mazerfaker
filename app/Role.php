<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    /**
     * Role Name
     *
     * @var string
     */
    protected $name;


    /**
     * Role description
     *
     * @var string
     */
    protected $description;

    /**
     * Get users with this role
     */
    public function users()
    {
        return $this->hasMany('App\User');
    }
}
