module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/auth/google',
     handler: 'auth.googleAuth',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
     method: 'GET',
     path: '/auth/google/callback',
     handler: 'auth.googleAuthCallback',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
     method: 'GET',
     path: '/auth/google/sample',
     handler: 'auth.googleAuthSample',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
     method: 'POST',
     path: '/auth/sign_in',
     handler: 'auth.localSingIn',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
      method: 'POST',
      path: '/auth/otp_verify/:otpId',
      handler: 'auth.otpVerify',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/auth/update_mobile_no',
      handler: 'auth.updateMobileNo',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/auth/verify_mobile_no/:otpId',
      handler: 'auth.verifyMobileNno',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/auth/update_email',
      handler: 'auth.updateEmail',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/auth/verify_email/:otpId',
      handler: 'auth.verifyEmail',
      config: {
        policies: [],
        middlewares: [],
      },
    }
  ],
};
