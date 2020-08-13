FROM nginx:1.18

# インクルード用のディレクトリ内を削除
RUN rm -f /etc/nginx/conf.d/*

# Nginxの設定ファイルをコンテナにコピー
ADD nginx.conf /etc/nginx/conf.d/nuxt-auth0.conf

# ビルド完了後にNginxを起動
CMD /usr/sbin/nginx -g 'daemon off;' -c /etc/nginx/nginx.conf