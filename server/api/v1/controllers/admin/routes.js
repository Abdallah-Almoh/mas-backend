const Express = require("express");
const controller = require("./controller");
const auth = require("../../../../helper/auth");
const upload = require("../../../../helper/uploadHandler");

module.exports = Express.Router()

  .post("/login", controller.login)

  .get("/listPress", controller.listPress)
  .get("/viewPress", controller.viewPress)
  .get("/listPartner", controller.listPartner)
  .get("/viewPartner", controller.viewPartner)
  .get("/viewLogo", controller.viewLogo)
  .get("/listLogo", controller.listLogo)
  .get("/viewAdvertisement", controller.viewAdvertisement)
  .get("/viewSocial", controller.viewSocial)
  .get("/listSocial", controller.listSocial)
  .get("/banner", controller.viewBanner)
  .get("/bannerApp", controller.viewAppBanner)
  .get("/price", controller.price)
  

  .use(auth.verifyToken)
  .post("/addAdmin", controller.addAdmin)
  .delete("/deleteAdmin", controller.deleteAdmin)
  .post("/setPermissions", controller.setPermissions)
  .get("/profile", controller.profile)
  .get("/userList", controller.userList)
  .get("/adminList", controller.adminList)
  .get("/moderatorList", controller.moderatorList)
  .get("/viewUser/:_id", controller.viewUser)
  .post("/subscription", controller.addSubscription)
  .get("/subscription/:_id", controller.viewSubscription)
  .put("/subscription", controller.editSubscription)
  .delete("/subscription", controller.deleteSubscription)
  .get("/subscriptionList", controller.subscriptionList)
  .get("/nft/:_id", controller.viewNFT)
  .get("/listNFT", controller.listNFT)
  .get("/order/:_id", controller.viewOrder)
  .get("/listOrder", controller.listOrder)
  .put("/stopAuction", controller.stopAuction)
  .get("/bid/:_id", controller.viewBid)
  .get("/listBid", controller.listBid)
  .get("/dashboard", controller.dashboard)
  .get("/totalAdminBalance", controller.totalAdminBalance)
  .get("/getAdminTotalEarnings", controller.getAdminTotalEarnings)
  .get("/totalUserFunds", controller.getTotalUserFunds)
  .get("/moderator/:_id", controller.viewModerator)
  .put("/moderator", controller.editModerator)
  .get("/listModerator", controller.listModerator)
  .get("/report/:_id", controller.viewReport)
  .put("/report", controller.editReport)
  .delete("/report", controller.deleteReport)
  .get("/listReport", controller.listReport)
  .post("/blockUser", controller.blockUser)
  .post("/sendWarningMessage", controller.sendWarningMessage)
  .get("/viewFee/:_id", controller.viewFee)
  .put("/editFee", controller.editFee)
  .delete("/deleteFee", controller.deleteFee)
  .get("/listFee", controller.listFee)
  .get("/listUser", controller.listUser)
  .delete("/deletePress", controller.deletePress)
  .put("/activeDeactivePress", controller.activeDeactivePress)
  .delete("/deletePartner", controller.deletePartner)
  .put("/activeDeactivePartner", controller.activeDeactivePartner)
  .delete("/deleteLogo", controller.deleteLogo)
  .get("/subscriptionListOfParticular", controller.subscriptionListOfParticular)
  .get("/viewSubscriptionOfParticular", controller.viewSubscriptionOfParticular)
  .delete("/removeAdvertisement", controller.removeAdvertisement)
  .put("/activeDeactiveAdvertisement", controller.activeDeactiveAdvertisement)
  .put("/editSocial", controller.editSocial)
  .get("/donationTransactionlist", controller.donationTransactionlist)
  .get("/viewDepositeTransaction/:_id", controller.viewDepositeTransaction)
  .get("/viewTransaction/:_id", controller.viewTransaction)
  .get("/transactionList", controller.transactionList)
  .get("/transactionUsersList", controller.transactionUsersList)
  .post("/subAdmin", controller.addSubAdmin)
  .get("/subAdmin/:_id", controller.viewSubAdmin)
  .put("/subAdmin", controller.editSubAdmin)
  .patch("/blockUnblockSubAdmin", controller.blockUnblockSubAdmin)
  .delete("/subAdmin", controller.deleteSubAdmin)
  .get("/subAdminList", controller.subAdminList)
  .get("/referralSetting", controller.getReferralSetting)
  .put("/referralSetting", controller.updateReferralSetting)
  .get("/listAdvertisement", controller.listAdvertisement)
  .delete("/banner", controller.deleteBanner)
  .delete("/bannerApp", controller.deleteAppBanner)
  .get("/listBanner", controller.listBanner)
  .get("/listAppBanner", controller.listAppBanner)
  .get("/getBannerDuration", controller.getBannerDuration)
  .get("/getAppBannerDuration", controller.getAppBannerDuration)
  .put("/editBannerDuration", controller.editBannerDuration)
  .put("/editAppBannerDuration", controller.editAppBannerDuration)
  .patch("/changeBannerStatus", controller.changeBannerStatus)
  .patch("/changeAppBannerStatus", controller.changeAppBannerStatus)
  .use(upload.uploadFile)
  .post("/addPress", controller.addPress)
  .put("/editPress", controller.editPress)
  .post("/addPartner", controller.addPartner)
  .put("/editPartner", controller.editPartner)
  .post("/addAdvertisement", controller.addAdvertisement)
  .put("/editAdvertisement", controller.editAdvertisement)
  .post("/addLogo", controller.addLogo)
  .put("/editLogo", controller.editLogo)
  .post("/banner", controller.addBanner)
  .post("/bannerApp", controller.addAppBanner)
  .put("/banner", controller.editBanner)
  .put("/bannerApp", controller.editBannerApp);
