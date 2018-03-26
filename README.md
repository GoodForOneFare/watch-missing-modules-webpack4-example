Simple repo to demonstrate incompatibilities between react-dev-utils' `WatchMissingNodeModulesPlugin`.

To see incompatibilities in action:

```
git co master
yarn install
yarn run build --watch # This will output errors about missingDeps.some not being a function
```

To see fixes in action:

```
git co fixed
yarn install
yarn run build --watch # This will allow the plugin to report a missing dependency (the build still fails, though!)

# To verify that contextDependencies watching still works, use this:
#  `touch node_modules/missing`
# Once that folder exists, the build should pass.
```

