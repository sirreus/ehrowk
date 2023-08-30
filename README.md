# Ehrowk's personal page

### Compiles and hot-reloads for development

```
npm run serve
```

### How to deploy to GitHub Pages

```
git checkout --orphan gh-pages
npm run build
git --work-tree dist add --all
git --work-tree dist commit -m 'Deploy'
git push origin HEAD:gh-pages --force
rm -r dist
git checkout -f main
git branch -D gh-pages
```
