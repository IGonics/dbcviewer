#!/usr/bin/env bash

ng build --prod --output-path demo --base-href=https://igonics.github.io/dbcviewer/
git push && git subtree push --prefix demo origin gh-pages
