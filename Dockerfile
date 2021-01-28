FROM nginx
# 复制 home文件夹
COPY assets /usr/share/nginx/html/assets
COPY ["blog.html","contact.html","index.html","resume.html","works.html", "/usr/share/nginx/html/"] 
# 复制nginx配置文件
COPY nginx/home.conf /etc/nginx/conf.d/home.conf
