import React, { useState } from "react";
import { method } from "./methods";

export default function body() {
  const { error } = method.parent;
  const { name, setName, email, setEmail } = method.state();

  return (
    <div className="container">
      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          {/* Nested Row within Card Body */}
          <div className="row">
            <div className="col-lg-5 d-none d-lg-block bg-register-image" />
            <div className="col-lg-7">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <form action="/register" method="post" className="user">
                  <div className="form-group">
                    <input
                      autoComplete="off"
                      type="text"
                      className="form-control form-control-user"
                      placeholder="Name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />

                    {error.name != null ? (
                      <small className="ml-3 mt-1">
                        <b className="text-danger">{error.name.msg}</b>
                      </small>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-user"
                      placeholder="Email Address"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {error.email != null ? (
                      <small className="ml-3 mt-1">
                        <b className="text-danger">{error.email.msg}</b>
                      </small>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="password"
                        className="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="Password"
                        name="password"
                      />
                      {error.password != null ? (
                        <small className="ml-3 mt-1">
                          <b className="text-danger">{error.password.msg}</b>
                        </small>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="password"
                        className="form-control form-control-user"
                        id="exampleRepeatPassword"
                        placeholder="Repeat Password"
                        name="password_confirmation"
                      />
                      {error.password_confirmation != null ? (
                        <small className="ml-3 mt-1">
                          <b className="text-danger">
                            {error.password_confirmation.msg}
                          </b>
                        </small>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-user btn-block"
                  >
                    Register Account
                  </button>
                </form>
                <hr />

                <div className="text-center">
                  <a className="small" href="forgot-password.html">
                    Forgot Password?
                  </a>
                </div>
                <div className="text-center">
                  <a className="small" href="/login">
                    Already have an account? Login!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
