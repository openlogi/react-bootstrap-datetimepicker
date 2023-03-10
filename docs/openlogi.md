# 修正の流れ

## 修正
```
npm install
```

必要な修正をする

PRを作りmasterにマージする

## publish
```sh
# 互換性がある場合
npm version patch

# 互換性がない場合（※ major versonが0なのでminorをあげる）
npm version minor

# packageにバージョンを更新したものをpush
git push && git push --tags

# npmに上げる
npm publish
```
