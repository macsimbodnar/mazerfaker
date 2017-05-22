<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'role_id'
    ];


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];


    /**
     * User role id
     *
     * @var integer
     */
    protected $role_id;


    /**
     * Get user role
     */
    public function role() {
        return $this->belongsTo('App\Role');
    }


    /**
     * Get scores
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function scores() {
        return $this->hasMany('App\Score');
    }
}
