<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Users;
use App\Http\Requests\storeRegisterRequest;

class UsersController extends Controller
{
    public function login(Request $request) {
        $email = $request->email;
        $password = $request->password;

        $userDetails = Users::where('email',$email)->where('password', $password)->first(['userid']);
        if(!$userDetails)  {
            echo json_encode(array("userExists"=>0));
            return ;
        }

        $jsonResponse = json_encode(array("userExists"=>1, "userId"=>$userDetails->userid));
        return response($jsonResponse)->cookie("userId", $userDetails->userid);
    }
    public function register(storeRegisterRequest $request) {
        
        $email = $request->email;
        $username = $request->username;
        $userid = substr($username,0,3).uniqid();
        $password = $request->password;
        $interests = $request->interests;

        $userExists = Users::where('email',$email)->orWhere('username', $username)->count();
        if($userExists) {
            return response()->json(["status"=>1, "msg"=>"User already exists!"]);
        }
    
        try {
            $newUser = new Users;
            $newUser->email = $email;
            $newUser->userid = $userid;
            $newUser->username = $username;
            $newUser->password = $password;
            $newUser->interests = $interests;
            $newUser->save();
            return response()->json(["status"=>2, "msg"=>"Registeration successfull!"]);
        }
        catch(\Illuminate\Database\QueryException $e) {
            return response()->json(["status"=>0, "msg"=>"Query Failed!"]);
        }

    }
    public function showProfile(Request $request) {
        $username = $request->username;
        echo $username;
    }
}
