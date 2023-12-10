<?php

declare(strict_types=1);

namespace App\Common;

use Carbon\Carbon;

class Helpers
{
    /**
     * [getCurrentDatetime description].
     * @param  string $format [description]
     * @return [type]         [description]
     */
    public static function getToday($format = Constants::FORMAT_DATE_DMYHIS)
    {
        return Carbon::now()->format($format);
    }

    /**
     * [formatDatetime description].
     * @param  [type] $date   [description]
     * @param  string $format [description]
     * @return [type]         [description]
     */
    public static function formatDatetime($date, $format = Constants::FORMAT_DATE_DMYHIS)
    {
        if (empty($date) || $date == Constants::DEFAULT_DATE) {
            return '';
        }
        $converted = Carbon::parse($date)->format($format);

        return $converted;
    }

    /**
     * [ajaxFailResponse description]
     * @param  String|null $message [description]
     * @param  [type]      $data    [description]
     * @return [type]               [description]
     */
    public static function ajaxFailResponse($code='error', $message = null, $data = null)
    {
        $resp = [
          'status' => 0,
          'code' => $code,
          'message' => $message ?? __('exception.ajaxFailure'),
        ];

        if (! empty($data)) {
            $resp = array_merge($resp, $data);
        }

        return $resp;
    }

    /**
     * [ajaxSuccessResponse description]
     * @param  [type] $data [description]
     * @return [type]       [description]
     */
    public static function ajaxSuccessResponse($data = null, $code='success')
    {
        $resp = [
          'status' => 1,
          'code' => $code,
        ];

        if (! empty($data)) {
            $resp = array_merge($resp, $data);
        }

        return $resp;
    }
}
