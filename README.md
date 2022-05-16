# LoC
This action calculates the lines of code for each file

## Inputs

## `folder`

The folder to scan. Default `./`

## `exclude`

The files to exclude. Default `""`

## `max-lines`

The max allowed lines for files. Default `1000`

## Example usage
```
uses: Berke-Ates/LoC@v1.1
with:
  folder: lib
  exclude: .generated.c
  max-lines: 200
```
