#!/bin/bash

s3cmd -c ./s3cfg sync --exclude "*" --include-from s3sync.include --delete-removed --acl-public . s3://www.johanna-und-ralph.de
