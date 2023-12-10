<?php

declare(strict_types=1);

namespace Database\Seeders\Tables;

/**
 *  This trait supports for importing data to database.
 *
 * @category   \Database
 */
trait FileImportTrait
{
    protected function getConnection()
    {
        if (empty($this->connection) || ! config()->has('database.connections.'.$this->connection)) {
            $this->connection = config('database.default');
        }

        return $this->connection;
    }

    protected function getPath($path)
    {
        return base_path().DIRECTORY_SEPARATOR.'database'.DIRECTORY_SEPARATOR.'files'.DIRECTORY_SEPARATOR.$path;
    }

    /**
     * Print error.
     *
     * @param $message
     */
    private function printError($message)
    {
        if (isset($this->command)) {
            $this->command->error($message);

            return;
        }
        echo $message;
    }

    /**
     * Import data from a file name.
     *
     * @param string $fileName
     * @param string $charset
     *
     * @return string || boolean
     */
    protected function importFile($fileName, $charset = 'UTF8', $columnString = '')
    {
        $seedFilePath = base_path().DIRECTORY_SEPARATOR.'database'.DIRECTORY_SEPARATOR.'files';
        $filePath = $seedFilePath.DIRECTORY_SEPARATOR.$fileName;
        if (! \file_exists($filePath) || ! \is_readable($filePath)) {
            $this->printError("Can not read file : $filePath");

            return false;
        }

        // Detect file format
        $filePathArr = explode('.', $filePath);
        $fileFormat = end($filePathArr);

        if ($fileFormat === 'sql') {
            return $this->importSQL($filePath);
        }

        if ($fileFormat === 'csv') {
            return $this->importCSV($filePath, $charset, $columnString);
        }

        return "Unsupport file format: $fileFormat";
    }

    /**
     * Import SQL File.
     *
     * @param $sqlFile
     *
     * @return bool
     */
    private function importSQL($sqlFile)
    {
        \DB::connection($this->getConnection())->unprepared(\file_get_contents($sqlFile));
    }

    /**
     * Import CSV.
     *
     * @param $csvFile
     * @param $charset
     *
     * @return bool
     */
    protected function importCSV($csvFile, $charset, $columnString = '')
    {
        $handle = \fopen($csvFile, 'r');
        if ($handle === false) {
            $this->printError("Can not open CSV file $csvFile");
            exit(1);
        }

        if (empty($columnString)) {
            $columns = \fgetcsv($handle);
            $columnString = '';
            foreach ($columns as $column) {
                $columnString .= $column.',';
            }
            $columnString = \mb_substr($columnString, 0, -1);
        }

        $table = $this->getTableName();
        $dataDelimiter = "\n";

        if (\mb_strtoupper(\mb_substr(PHP_OS, 0, 3)) === 'WIN') {
            $dataDelimiter = "\r\n";
        }

        $rawQuery = "LOAD DATA LOCAL INFILE '%s' INTO TABLE $table
            CHARACTER SET $charset
            FIELDS TERMINATED BY '\",\"'
            LINES STARTING BY '\"'
            TERMINATED BY '\"$dataDelimiter'
            IGNORE 1 LINES ($columnString)";

        $query = \sprintf($rawQuery, \addslashes($csvFile));
        $result = \DB::connection($this->getConnection())->getPdo()->exec($query);

        if ($this->getNumberOfRows() === 0) {
            $rawQuery = "LOAD DATA LOCAL INFILE '%s' INTO TABLE $table
            CHARACTER SET $charset
            FIELDS TERMINATED BY ','
            LINES TERMINATED BY '$dataDelimiter'
            IGNORE 1 LINES ($columnString)";
            $query = \sprintf($rawQuery, \addslashes($csvFile));
            $result = \DB::connection($this->getConnection())->getPdo()->exec($query);
        }

        if ($result === false) {
            $this->printError('Can not execute query !');
            $this->printError($query);
            exit(1);
        }
    }

    /**
     * Import csv file from path.
     *
     * @param string $path
     * @return int
     */
    public function importCSVFile($path, $charset = 'UTF8')
    {
        $column = $this->columnString ?? '';

        $this->deleteTable();
        $this->importCSV($path, $charset, $column);

        return $this->getNumberOfRows();
    }
}
