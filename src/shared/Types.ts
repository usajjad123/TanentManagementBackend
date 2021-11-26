export interface user {
  uid
  :
  string
  firstname
  :
  string
  lastname
  :
  string
  email
  :
  string
  password
  :
  string
  phoneno
  :
  string
}

export interface SignupRequest {
  body: {
    user: user
  };
}

export interface ChangePasswordRequest {
  body: {
    email: user["email"];
    password: user["password"];
    newpassword: user["password"];
  }
}

export interface ResetPasswordRequest {
  body: {
    email: user["email"];
  }
}
