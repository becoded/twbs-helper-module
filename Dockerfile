ARG VERSION=

FROM php:${VERSION}-cli

COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer
RUN \
    apt-get update -yq; \
    apt-get install -yq unzip libicu-dev; \
    pecl install pcov libsodium; \
    docker-php-ext-enable pcov sodium; \
    docker-php-ext-install intl

