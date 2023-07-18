echo "**** Configure source ****"

nginx -t

service php8.2-fpm start
service nginx start

rm -rf source
git clone -b resource https://github.com/vietstars/Nginx-Laravel10.git source
cp -r ./source/. .
rm -rf source

cp .env.example .env

composer install
composer post-root-package-install
composer post-create-project-cmd

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
exit;
