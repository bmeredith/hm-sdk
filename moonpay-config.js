// gets library from window
const MoonpayWallet = window.MoonpayWallet

// init wallet with api key
const wallet = new MoonpayWallet({
  actions: {
    // 🆕 update can be removed
    resetState: () => {
      // THIS GETS CALLED WHEN WE CALL `wallet.deactivate()`
      console.log('resetState')
      document.getElementById('walletAddress').innerHTML = ''
    },
  },
  options: {
    // the domain the login widget is on
    loginDomain: 'https://buy-sandbox.moonpay.com',
    // the domain the sdk is on - which we can read from the window
    loginTarget: window.location.protocol + '//' + window.location.host,
    // partner specific api - this is used to identity the partner on the backend
    apiKey: 'pk_test_Ud07L6c0FmoVQuav3IakuCnhgl149ChK',
    // we can listen for the login opening and closing
    onLoginWindowChange: (show) => { console.log('show change', show) },
    // set color of `X` to close login window
    closeButtonColor: '#FFFFFF',

    // 🆕 on a successful login
    onSuccessfulLogin: (data) => {
      const { walletAddress, firstName, lastName, email } = data
      console.log({ walletAddress, firstName, lastName, email })
      document.getElementById('walletAddress').innerHTML = walletAddress
    },
  },
})

const connectWallet = () => {
  console.log('connectWallet')
  // open and prompt login. NOTE this will auto close if use is already logged in
  wallet.activate()
}

const disconnectWallet = () => {
  console.log('disconnectWallet')
  wallet.deactivate()
}
