import express from 'express';

const app = express();

// 設定靜態檔案目錄
app.use(express.static(path.join(__dirname, "dist")));

app.listen(3000, () => console.log('http server is running at port 3000.'));