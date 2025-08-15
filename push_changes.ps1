Write-Host "Pushing changes to GitHub..." -ForegroundColor Green
git add .
git commit -m "Update portfolio website"
git push origin main
Write-Host "Done!" -ForegroundColor Green
Read-Host "Press Enter to continue"
