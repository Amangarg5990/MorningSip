@echo off
title Morning Sip - A Better Morning Begins Here
cd /d "%~dp0"

echo ===================================================
echo           Morning Sip - Project Launcher
echo ===================================================
echo.

:: Check for Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not found in your system PATH!
    echo Please install Node.js from https://nodejs.org/
    echo.
    pause
    exit /b 1
)

:: Check for npm
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] npm is not found in your system PATH!
    echo.
    pause
    exit /b 1
)

:: Check if dependencies are installed
if not exist "node_modules\" (
    echo [INFO] Dependencies not found. Running npm install...
    echo.
    call npm install
    if %errorlevel% neq 0 (
        echo.
        echo [ERROR] npm install failed!
        pause
        exit /b %errorlevel%
    )
    echo.
    echo [SUCCESS] Dependencies installed successfully!
    echo.
)

echo [INFO] Starting Vite development server and opening browser...
echo [INFO] Press Ctrl+C to stop the server.
echo ===================================================
echo.

call npm run dev -- --open

if %errorlevel% neq 0 (
    echo.
    echo [NOTE] Server closed or encountered an error.
    pause
)
