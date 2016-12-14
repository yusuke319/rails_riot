rails_riot_template
===

Template for rails with riot.

## Usage
1. bundle install --path vendor/bundle --without production --jobs=2
1. vi config/settings.yml
    ```yaml
    defaults: &defaults
      DB_USERNAME: user
      DB_PASSWORD: pass
      DB_HOST: localhost
    
    development:
      <<: *defaults
      DB_NAME: development
    
    test:
      <<: *defaults
      DB_NAME: test
    
    production:
      <<: *defaults
      DB_NAME: production
    ```
1. npm install
1. bundle exec foreman start
