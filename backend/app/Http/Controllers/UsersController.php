<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Users;

class UsersController extends Controller
{
    public function login(Request $request) {
        $username = $request->username;
        $password = $request->password;

        $userDetails = Users::where('username',$username)->where('password', $password)->first(['userid']);
        $userExists = $userDetails->count();
        if(!$userExists)  {
            echo json_encode(array("userExists"=>0));
            return ;
        }

        $jsonResponse = json_encode(array("userExists"=>1, "userId"=>$userDetails->userid));
        return response($jsonResponse)->cookie("userId", $userDetails->userid);
    }
    public function register(Request $request) {
        echo "register";
    }
    public function showProfile(Request $request) {
        $username = $request->username;
        echo $username;
    }
}
