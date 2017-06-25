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
     * The users that belong to the role.
     */
    public function users()
    {
        return $this->belongsToMany('App\User');
    }
}
