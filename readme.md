## 專案目的
以最簡單的方式透過typescript的方式使用oepnlayers。

## 安裝語法
1. npm install ol@10.3.0
2. npm install --save-dev typescript parcel
3. tsc --init

## 其餘設定
1. 修改「tsconfig.json」檔案。
   1. 建立「tsconfig」設定。
   2. 增加「Parcel」讀取typescript設定。
      1. 
      ```js
        "~/*": ["./*"] //Parcel設定
      ```

## 執行語法

1. 建立「dist」檔案:

```cmd
   
    npm run build

```
2. 執行專案檔:
```cmd
    npm run dev
```


### 註記
1. ol不可安裝9.2.4版本，會有已知bug。
2. 因為openlayers模組採用esm語法進行引入，如果不透過Parcel進行設定，會使瀏覽器無法讀取ol模組，故需要使用Parcel進行搭配使用。
