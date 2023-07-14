<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

use App\Http\Controllers\Controller;
use App\Models\User;

class AuthController extends Controller 
{

  public function setAuth(Request $request) {
    try {
      $request->validate([
        'email' => 'email|required',
        'password' => 'required'
      ]);

      $credentials = request([
        'email',
        'password'
      ]);

      if (!Auth::attempt($credentials)) {
        return response()->json([
          'status_code' => 500,
          'message' => 'Unauthorized'
        ]);
      }

      $user = User::where('email', $request->email)->first();

      if (!Hash::check($request->password, $user->password, [])) {
        throw new \Exception('Error in Login');
      }

      $tokenResult = $user->createToken('authToken')->plainTextToken;

      // Revoke all tokens
      // $user->tokens()->delete();
      // Revoke the user's current token
      // $request->user()->currentAccessToken()->delete();
      // Revoke a specific token
      // $user->tokens()->where('id', $id)->delete();

      return response()->json([
        'status_code' => 200,
        'access_token' => $tokenResult,
        'token_type' => 'Bearer',
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
