#!/bin/sh

APPNAME='alganorth'
APPHOST='xa.bi'
APPUSER='chikoon'
APPHOME='~/code/alganorth'

echo "# Begin AlgaNorth deployment"
echo

echo "# Merge ${APPNAME}.local develop to main"
echo "> git co main"
git checkout main
echo "> git merge develop"
git merge develop

echo "# Push ${APPNAME}.main to github"
echo "> git push origin main"
git push origin main

echo "# Push ${APPNAME}.main to production"
echo "> git push -f ${APPUSER}@${APPHOST}:~/code/${APPNAME} +main:new-main"
git push -f ${APPUSER}@${APPHOST}:~/code/${APPNAME} +main:new-main

echo "# Done! Now, go to production as ${APPUSER} and unpack it -------------------"
echo "> cd ${APPHOME}; git co main; git merge new-main"
