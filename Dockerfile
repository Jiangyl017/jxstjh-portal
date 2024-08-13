FROM nginx
RUN mkdir /app
COPY ./_site /app/
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080
