# Menggunakan NGINX sebagai web server
FROM nginx:alpine

# Menyalin file aplikasi ke direktori NGINX
COPY . /usr/share/nginx/html

# Ekspos port 80 untuk aplikasi
EXPOSE 80
