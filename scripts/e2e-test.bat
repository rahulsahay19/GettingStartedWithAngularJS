@echo off

set BASE_DIR=%~dp0
karma start "%BASE_DIR%\..\test\e2e.conf.js" %*
