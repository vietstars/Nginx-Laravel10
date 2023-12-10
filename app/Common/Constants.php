<?php

declare(strict_types=1);

namespace App\Common;

class Constants
{
    public const CREATE = 'create';

    public const UPDATE = 'update';

    public const DELETE = 'delete';

    public const FILE_EXT = '.txt,.csv,.doc,.xlsx,.xls,.docx,.pdf,.zip';

    public const PHOTO_EXT = '.jpeg,.png,.jpg,.gif,.svg,.zip';

    public const FORMAT_SQL_DATE_YMD = 'Y-m-d';

    public const FORMAT_DATE_DMY = 'Y/m/d';

    public const FORMAT_DATE_DMYHI = 'Y/m/d H:i';

    public const FORMAT_DATE_DMYHIS = 'Y-m-d H:i:s';

    public const FORMAT_DATE_DM = 'm/d';

    public const FORMAT_DATE_DMHI = 'm/d H:i';

    public const FORMAT_DATE_YMDHI = 'Ymd_his_';

    public const DEFAULT_DATE = '2023-11-16 00:00:00';

    public const SYSTEM = 1;
}
