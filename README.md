# Portfolio Nguyễn Thị Quỳnh Thương

Website Portfolio học phần **Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo**.

- Sinh viên: Nguyễn Thị Quỳnh Thương
- Mã sinh viên: 25051343
- Ngành: Kinh tế Quốc tế
- Trường: Trường Đại học Kinh tế – ĐHQGHN

## Tên repository gợi ý

`25051343-nguyen-thi-quynh-thuong-portfolio`

## Chạy trên máy

Website thuần HTML/CSS/JavaScript, không cần cài package:

```bash
python -m http.server 8000
```

Mở `http://localhost:8000`.

## Deploy GitHub Pages

1. Tạo repository mới với tên gợi ý ở trên.
2. Upload toàn bộ nội dung thư mục này lên nhánh `main`.
3. Vào **Settings → Pages → Source**, chọn **GitHub Actions**.
4. Workflow trong `.github/workflows/deploy.yml` sẽ tự động deploy.

Website sử dụng hash routing nên hoạt động ổn định trên GitHub Pages và không cần cấu hình base path.
