# VDR JavaScript Test

Test repository for testing OSV.dev fallback for fix version resolution in Backline.

## Vulnerable Packages

This project includes dependencies with known vulnerabilities:

| Package | Version | Vulnerability |
|---------|---------|---------------|
| @smithy/config-resolver | 4.1.4 | GHSA-6475-r3vj-m8vf |
| lodash | 4.17.20 | CVE-2021-23337, CVE-2020-28500 |
| axios | 0.21.1 | CVE-2021-3749 |
| minimist | 1.2.5 | CVE-2021-44906 |
| node-fetch | 2.6.1 | CVE-2022-0235 |

## Usage

```bash
npm install
npm start
```

## Testing with Backline

1. Upload `vdr-report.csv` as Custom Report
2. Use `vdr-csv-mapping.yaml` as config file
3. Repository URL: https://github.com/backline-playground/vdr-js-test
