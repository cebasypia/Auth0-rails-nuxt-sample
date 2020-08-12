require'net/http'

Knock.setup do |config|
  
  config.token_lifetime = 1.hour
  
  # For Auth0
  config.token_signature_algorithm = 'RS256'
  config.token_audience = -> { ENV["AUTH0_CLIENT_ID"] }
  jwks_raw = Net::HTTP.get URI(ENV['AUTH0_JWKS'])
  jwks_keys = Array(JSON.parse(jwks_raw)['keys'])
  config.token_public_key = OpenSSL::X509::Certificate.new(
    Base64.decode64(jwks_keys[0]['x5c'].first)
  ).public_key

  config.token_secret_signature_key = -> { JWT.base64url_decode Rails.application.secrets.auth0_client_secret }
end