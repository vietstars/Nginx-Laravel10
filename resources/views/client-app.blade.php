<!DOCTYPE html>
<html >
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>IT4TODAY</title>
    {{ vite_assets() }}
    <link rel="icon" href="{{ asset('favicon.svg') }}">
    <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f=satoshi@900,700,500,300,401,400&amp;display=swap">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <meta property="og:url"
        content={{ url("") ?? "https://it4today.org" }} />
    <meta property="og:type"
        content="it4today decentralized technology" />
    <meta property="og:title"
        content="it4today.org decentralized ecosystem" />
    <meta property="og:description"
        content="Technology news bring technology 4.0 to life" />
    <meta property="og:image" 
        content="https://storage.fleek.zone/8175965a-9f07-4cca-a48a-27d84c75e5b4-bucket/it4today.svg" />
    <meta property="fb:app_id"
        content="it4d-347027202455864" />
    <meta property="fb:admins"
        content="admin@it4today.org"/>
</head>
<body>
  <div id="root"></div>
</body>
</html>