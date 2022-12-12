module.exports = {
  lintOnSave: false,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        "appId": "com.app.mrQiDdt",
        "productName": "ddtFormula",
        "copyright": "Copyright © 2022 mrqi",
        "directories": {
          "buildResources": "build",   //指定打包需要的静态资源，默认是build
          "output": "dist",  //打包生成的目录，默认是dist
        },
        "publish": [{
          "provider": "generic",
          "url": "http://127.0.0.1:9005/"
        }],
        "mac": {
          "target": ["dmg", "zip"],       //安装包的格式，默认是"dmg"和"zip"
          "category": "public.app-category.utilities"
        },
        "dmg": {
          "background": "build/background.jfif",
          "icon": "build/icons/icon.icns",
          "iconSize": 100,
          "contents": [
            {
              "x": 380,
              "y": 180,
              "type": "link",
              "path": "/Applications"
            },
            {
              "x": 130,
              "y": 180,
              "type": "file"
            }
          ],
          "window": {
            "width": 540,
            "height": 380
          }
        },
        "win": {
          "target": [
            "msi",
            "nsis"
          ],
          "icon": "build/icons/icon.ico"
        },
        "nsis": {
          "oneClick": false,
          "language": "2052",
          "perMachine": true,
          "allowToChangeInstallationDirectory": true
        }
      }
    }
  }
}
