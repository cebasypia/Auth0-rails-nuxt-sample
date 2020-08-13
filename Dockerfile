FROM ruby:2.7

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
  && apt-get update -qq \
  && apt-get install -y nodejs yarn \
  && mkdir /nuxt-auth0
WORKDIR /nuxt-auth0
COPY Gemfile /nuxt-auth0/Gemfile
COPY Gemfile.lock /nuxt-auth0/Gemfile.lock
RUN bundle install
COPY . /nuxt-auth0

EXPOSE 3000

# puma.sockを配置するディレクトリを作成
RUN mkdir -p tmp/sockets