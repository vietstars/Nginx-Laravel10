echo "**** Configure source ****"

cp .env.example .env

composer install

composer require vietstars/code-style
php artisan vendor:publish \
  --tag=config-fixer \
  --force

composer require vietstars/logs-viewer
php artisan vendor:publish \
  --provider="Vietstars\LogsViewer\LogsViewerServiceProvider" \
  --tag=views

composer require vietstars/dev-debugger

php artisan vendor:publish --provider=”Laravel\Sanctum\SanctumServiceProvider”

php artisan migrate:fresh --seed

npm update
npm run dev
