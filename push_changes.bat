@echo off
echo Pushing changes to GitHub...
git add .
git commit -m "Update portfolio website"
git push origin main
echo Done!
pause
