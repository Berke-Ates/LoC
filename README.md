# LoC
This action calculates the lines of code for each file

## Inputs

## `folder`

The folder to scan. Default `.`.

## `max-lines`

The max allowed lines for files. Default `1000`.

## Example usage

uses: actions/LoC@v1.0
with:
  folder: lib
  max-lines: 200
