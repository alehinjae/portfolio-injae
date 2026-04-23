@echo off
echo Encerrando Chrome...
taskkill /F /IM chrome.exe /T >nul 2>&1
timeout /t 2 /nobreak >nul
echo Abrindo Chrome com remote debugging...
start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222
echo Chrome aberto! Aguarde carregar, depois reinicie o Claude Code.
pause
