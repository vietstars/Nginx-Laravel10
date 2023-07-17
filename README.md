## Checkstyle
```cmd
composer require vietstars/code-style

php artisan vendor:publish --tag=config-fixer --force

"scripts": {
  "check-style": "php-cs-fixer fix --dry-run --diff",
  "fix-style": "php-cs-fixer fix"
}
```

## Logs viewer
```cmd
composer require vietstars/logs-viewer
```

## Dev debugger
```cmd
composer require vietstars/dev-debugger
```

## Laravel-mix
```cmd
npm instsall laravel-mix
```

## Sactum
```cmd
# build config and migragtion
php artisan vendor:publish --provider=”Laravel\Sanctum\SanctumServiceProvider”
```
## Enable middleware
EnsureFrontendRequestsAreStateful in Kernel.php

## Add api token to user model
```php
use Laravel\Sanctum\HasApiTokens; 
```

## Webpack.js
```cmd
# webpack
npm install webpack webpack-cli --save-dev

# cross-env
npm install --save-dev cross-env
npm install sass-loader@^12.1.0 sass resolve-url-loader@^5.0.0 --save-dev --legacy-peer-deps
```