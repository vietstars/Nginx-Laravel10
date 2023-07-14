# Nginx-Laravel10

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

## Sactum
```cmd
# build config and migragtion
php artisan vendor:publish --provider=”Laravel\Sanctum\SanctumServiceProvider”
```
## Enable middleware
```php
# http\Kernel.php
# api
\Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
```

## Add api token to user model
```php
use Laravel\Sanctum\HasApiTokens; 
```
