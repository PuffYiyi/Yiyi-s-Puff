// app.js
const AV = require("./libs/av-core-min.js");
const adapters = require("./libs/leancloud-adapters-weapp.js");

AV.setAdapters(adapters);
AV.init({
  appId: "MdrBAX2Xvpvt63UURiGFayMZ-gzGzoHsz",
  appKey: "RY8QQ4Mhslp9hiSRHpNzRhuA",
  serverURL: "https://mdrbax2x.lc-cn-n1-shared.com",
});

App({
  globalData: {
    userInfo: {
      userAge: '',
      userAddress: '',
      userContact: '',
      userMedicalInfo: '',
      userAdLevel: '',
      userDiagnosisDate: '',
      userHeight: '',
      userWeight: '',
      role: '' // 'patient' 或 'caregiver'
    },
    currentPatient: null // 照护者当前管理的患者
  },
  
  onLaunch() {
    // 初始化日志
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    
    // 登录
    wx.login({
      success: res => {
        // 可以在这里添加登录逻辑
      }
    })
  }
})