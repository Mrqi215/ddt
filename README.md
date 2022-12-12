## 弹弹堂公式

### 采用vue+electron

- 基础算法
- ui界面

## 启动

npm run electron:serve

## 打包

npm run electron:build

### npm 配置 electron 华为云环境

npm config set registry https://mirrors.huaweicloud.com/repository/npm/
npm cache clean -f
npm config set electron_mirror https://mirrors.huaweicloud.com/electron/
npm config set electron_builder_binaries_mirror https://mirrors.huaweicloud.com/electron-builder-binaries/
// 遇到无法打包情况 请重启编辑器



