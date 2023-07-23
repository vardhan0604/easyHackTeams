<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class UsersFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'userid' => rand(0, 99999),
            'username' => $this->faker->name(),
            'password' => '1234', // password
            'email' => $this->faker->unique()->safeEmail(),
            'interests' => json_encode(array("php")),
            'teams' => json_encode(array()),
            'createdteams' => json_encode(array()),
            'invites' => json_encode(array()),
        ];
    }
}
