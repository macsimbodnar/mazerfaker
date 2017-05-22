<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Score extends Model
{
    /**
     * score
     *
     * @var integer
     */
    protected $score;


    /**
     * Game id
     *
     * @var integer
     */
    protected $game_id;


    /**
     * User id
     *
     * @var integer
     */
    protected $user_id;


    /**
     * Get the game
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function game() {
        return $this->belongsTo('App\Game');
    }


    /**
     * Get User
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function palyer() {
        return $this->belongsTo('App\User');
    }
}
