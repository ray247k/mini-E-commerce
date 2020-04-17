FROM nginx:1.13

# 刪除預設的 Nginc 設定
RUN rm /etc/nginx/conf.d/default.conf

# 加入自己定義的 Nginx 設定檔
COPY config/nginx.conf /etc/nginx/conf.d/

# 將前端靜態檔案映射到容器的 /www 目錄下
COPY dist /www