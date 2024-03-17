FROM mariadb:10.11.7

ENV MYSQL_ROOT_PASSWORD 1234
ENV MYSQL_DATABASE profile
EXPOSE 3306

WORKDIR /etc/mysql

# sql 파일 생성되면 주석 해제
# COPY ./setDB.sql /etc/mysql/setDB.sql

# MariaDB Config Setting (table 소문자, 한국 시간, 한글 깨짐 수정 등)
RUN echo lower_case_table_names=1 >> /etc/mysql/conf.d/docker.cnf
RUN echo default-time-zone='+9:00' >> /etc/mysql/conf.d/docker.cnf
RUN echo collation-server = utf8mb4_unicode_ci >> /etc/mysql/conf.d/docker.cnf
RUN echo collation-server = utf8mb4_0900_ai_ci >> /etc/mysql/conf.d/docker.cnf
RUN echo character-set-server = utf8mb4 >> /etc/mysql/conf.d/docker.cnf
RUN echo skip-character-set-client-handshake >> /etc/mysql/conf.d/docker.cnf
