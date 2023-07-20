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

## React.js
```cmd
# cross-env
npm install react@latest react-dom@latest sass
npm i @vitejs/plugin-react --force
npm i @vitejs/plugin-react-refresh --force
npm add -D sass
```
