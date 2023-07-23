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
        return response($jsonResponse)->cookie("userId", $userDetails->userid, 60);
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
        $userExists = Users::where('username', $username)->count();
        if(!$userExists) {
            return response()->json(["userExists"=>0, "msg"=>"User doesn't exists!"]);
        }

        $userDetails = Users::where('username',$username)->first(['userid', 'email', 'username', 'interests', 'teams', 'createdteams']);
        $userDetails = $userDetails->toArray();
        $userDetails['userExists'] = "1";

        return response()->json($userDetails);
    }
    public function getMyProfile(Request $request) {

        $userid = $request->userid;
        $userExists = Users::where('userid', $userid)->count();
        if(!$userExists) {
            return response()->json(["userExists"=>0, "msg"=>"User doesn't exists!"]);
        }

        $userDetails = Users::where('userid',$userid)->first(['userid', 'email', 'username', 'interests', 'teams', 'createdteams']);
        $userDetails = $userDetails->toArray();
        $userDetails['userExists'] = "1";

        return response()->json($userDetails);
    }

    public function checkUserExistence(Request $request) {
        $userid = $request->userid;
        $userExists = Users::where('userid',$userid)->count();
        
        return response()->json(["status"=>$userExists]);
        
    }
}
