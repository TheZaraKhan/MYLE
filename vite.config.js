// vite.config.js
const { resolve } = require("path");

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        login: resolve(__dirname, "pages/login/index.html"),
        signup1: resolve(__dirname, "pages/signup1/index.html"),
        signup2: resolve(__dirname, "pages/signup2/index.html"),
        signup3: resolve(__dirname, "pages/signup3/index.html"),
        signup4: resolve(__dirname, "pages/signup4/index.html"),
        explore_a: resolve(__dirname, "pages/explore_a/index.html"),
        explore_b: resolve(__dirname, "pages/explore_b/index.html"),
        My_Activities_Cell: resolve(
          __dirname,
          "pages/My_Activities_Cell/index.html"
        ),
        empty_state: resolve(__dirname, "pages/empty_state/index.html"),
        Notification_cell: resolve(
          __dirname,
          "pages/Notification_cell/index.html"
        ),
        accounts_cell: resolve(__dirname, "pages/accounts_cell/index.html"),
        postEvent: resolve(__dirname, "pages/postEvent/index.html"),
        editProfile: resolve(__dirname, "pages/editProfile/index.html"),
        eventDetails: resolve(__dirname, "pages/eventDetails/index.html"),
        eventDetails2: resolve(__dirname, "pages/eventDetails2/index.html"),
        ReportEventPopup: resolve(
          __dirname,
          "pages/ReportEventPopup/index.html"
        ),
        prefrences: resolve(__dirname, "pages/prefrences/index.html"),
        userprofile: resolve(__dirname, "pages/userprofile/index.html"),
        reviews: resolve(__dirname, "pages/reviews/index.html"),
        checkout: resolve(__dirname, "pages/checkout/index.html"),
        checkout2: resolve(__dirname, "pages/checkout2/index.html"),
        success: resolve(__dirname, "pages/success/index.html"),
        mytickets: resolve(__dirname, "pages/mytickets/index.html"),
        tickets: resolve(__dirname, "pages/tickets/index.html"),
        addtickets: resolve(__dirname, "pages/addtickets/index.html"),
        sellerlogin: resolve(__dirname, "pages/seller-login/index.html"),
        sellerdashboard1: resolve(
          __dirname,
          "pages/seller-dashboard1/index.html"
        ),
        sellerdashboard2: resolve(
          __dirname,
          "pages/seller-dashboard2/index.html"
        ),
        sellerdashboard3: resolve(
          __dirname,
          "pages/seller-dashboard3/index.html"
        ),
        sellerdashboard4: resolve(
          __dirname,
          "pages/seller-dashboard4/index.html"
        ),
      },
    },
  },
};
