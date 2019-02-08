#!/bin/bash
apiUrl="//[A-Za-z0-9_.]+"
replaceUrl="//${HOSTNAME}"
filename="./src/assets/config/configuration.ts"
echo sed -i "s/($apiUrl)/(${replaceUrl})/g" "$filename"
