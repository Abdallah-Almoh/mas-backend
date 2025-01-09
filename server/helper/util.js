const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const ethers = require('ethers');

module.exports = {

  generateETHWallet() {
    const wallet = ethers.Wallet.createRandom();
    return {
      address: wallet.address.toLowerCase(),
      privateKey: wallet.privateKey
    }
  },

  getReferralCode() {
    var x = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 8; i++) {
      x += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return x;
  },

  getToken: async (payload) => {
    try {
      var token = await jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });
      return token;
    } catch (error) {
      console.error("Error generating token:", error);
      throw error;
    }
  },

  getImageUrl: async (files) => {
    try {
      var result = await cloudinary.v2.uploader.upload(files[0].path, {
        resource_type: "auto",
      });
      return result.secure_url;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  },

  getImageUrls: async (files) => {
    try {
      let urls = [];
      for (let i = 0; i < Math.min(files.length, 9); i++) {
        const result = await cloudinary.v2.uploader.upload(files[i].path, {
          resource_type: "auto"
        });
        urls.push(result.secure_url);
      }
      return urls;
    } catch (error) {
      console.error("Error uploading images:", error);
      throw error;
    }
  },

  getFileUrlOnPhone: async (path) => {
    try {
      var result = await cloudinary.v2.uploader.upload(path, {
        resource_type: "auto",
      });
      return result.secure_url;
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  },

  getSecureUrl: async (base64) => {
    try {
      var result = await cloudinary.v2.uploader.upload(base64);
      return result.secure_url;
    } catch (error) {
      console.error("Error uploading base64 image:", error);
      throw error;
    }
  },

};
