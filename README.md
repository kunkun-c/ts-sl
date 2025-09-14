# Union vs Intersection in TypeScript

- **Union (`|`)**: Một trong nhiều kiểu.  
  Ví dụ: `string | number` nghĩa là có thể là string HOẶC number.  
  → Dùng để biểu diễn lựa chọn.

- **Intersection (`&`)**: Kết hợp nhiều kiểu thành một.  
  Ví dụ: `User & Timestamp` nghĩa là phải có tất cả thuộc tính của cả User VÀ Timestamp.  
  → Dùng để mở rộng/ghép kiểu.
