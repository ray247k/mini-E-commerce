FROM node:12

# 指定工作目錄為 /usr/src/app，接下来的指令全部在這個路徑下操作
WORKDIR /usr/src/app

# 將 package.json 複製到根目錄
COPY package*.json ./

# 安裝 npm 依賴
RUN npm install

# 複製全部程式內容到容器內
COPY . .

# 設定環境變數
ENV NODE_ENV=production
ENV MONGO_URI=mongodb://db:27017/admin
ENV MONGO_USER=mongoadmin
ENV MONGO_PASSWORD=secret
ENV HOST=0.0.0.0
ENV PORT=3000

# 曝露出 3000 port
EXPOSE 3000

# 設定映像檔內執行的指令
CMD ["npm", "start"]
