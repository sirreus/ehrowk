# Ehrowk's personal page

### Compiles and hot-reloads for development

```
npm run serve
```

### How to deploy to GitHub Pages manually

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

### How to automate deploy to GitHub Pages

look here to [learn more](https://dev.to/the_one/deploy-to-github-pages-like-a-pro-with-github-actions-4hdg) about this
