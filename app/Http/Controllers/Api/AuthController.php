<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function setAuth(Request $request)
    {
        try {
            $request->validate([
              'email' => 'email|required',
              'password' => 'required',
            ]);

            $credentials = request([
              'email',
              'password',
            ]);

            if (! Auth::attempt($credentials)) {
                return response()->json([
                  'status_code' => 500,
                  'message' => 'Unauthorized',
                ]);
            }

            $user = User::where('email', $request->email)->first();

            if (! Hash::check($request->password, $user->password, [])) {
                throw new \Exception('Error in Login');
            }

            $tokenResult = $user->createToken('authToken')->plainTextToken;

            // Revoke all tokens
            // $user->tokens()->delete();
            // Revoke the user's current token
            // $request->user()->currentAccessToken()->delete();
            // Revoke a specific token
            // $user->tokens()->where('id', $id)->delete();
            $user->id = md5($user->id);
            $user->token = $tokenResult;

            return response()->json([
              '_auth' => $user,
            ]);
        } catch (\Exception $error) {
            return response()->json([
              'status_code' => 500,
              'message' => 'Error in Login',
              'error' => $error,
            ]);
        }
    }

    public function getAllUsers(Request $request)
    {
        $users = User::All();

        return response()->json([
          'status_code' => 200,
          'data' => $users,
        ]);
    }
}
