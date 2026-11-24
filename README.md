# سیستم مدیریت کاربراان

## قابلیت‌های پروژه 

### ۱. احراز هویت 

- امکان ورود کاربران با استفاده از ایمیل و رمز عبور تعریف شده در سیستم.
- جلوگیری از ورود کاربران غیرفعال (`status: false`).
- استفاده از `Auth Guard` برای محافظت از مسیر `/users`.
- جلوگیری از دسترسی کاربران احراز هویت نشده به صفحات محافظت شده.
<img width="1920" height="897" alt="Screenshot (4026)" src="https://github.com/user-attachments/assets/8c4ee8fc-7e76-4e4f-b335-77bbed9a507d" />

### ۲. مدیریت سطح دسترسی 

در این پروژه سه نقش کاربری تعریف شده است:

**مدیر سیستم (Admin)**

- مشاهده لیست تمام کاربران.
- اضافه کردن کاربر جدید.
- ویرایش اطلاعات کاربران.
- حذف کاربران.
- مشاهده جزئیات کاربران.
<img width="1920" height="948" alt="Screenshot (4027)" src="https://github.com/user-attachments/assets/b2c4c82e-5516-443a-8f1f-86ba1a2166c2" />

**اپراتور (Operator)**

- مشاهده لیست کاربران.
- مشاهده جزئیات کاربران.
- عدم دسترسی به عملیات اضافه کردن، ویرایش و حذف کاربران.
<img width="1920" height="968" alt="Screenshot (4029)" src="https://github.com/user-attachments/assets/f1600202-ab86-4a76-a4c8-2dac8ed676f6" />

**کاربر عادی (User)**

- مشاهده لیست کاربران.
- عدم دسترسی به عملیات مدیریتی و مشاهده جزئیات کاربران.
<img width="1920" height="910" alt="Screenshot (4028)" src="https://github.com/user-attachments/assets/7789b46a-5648-41da-b0df-dd6d118e1eff" />

### ۳. مدیریت کاربران 

- اضافه کردن کاربران جدید از طریق یک صفحه مجزا که فقط مدیر سیستم به آن دسترسی دارد.
- ویرایش اطلاعات کاربران که فقط مدیر سیستم به آن دسترسی دارد.
- حذف کاربران از لیست که فقط مدیر سیستم امکان آن را دارد.
- مشاهده اطلاعات و جزئیات کامل هر کاربر که هم اپراتور هم ادمین امکان آن را دارند.
- انتقال خودکار به صفحه لیست کاربران پس از ذخیره اطلاعات کاربر جدید یا ویرایش اطلاعات.
<img width="1920" height="979" alt="Screenshot (4032)" src="https://github.com/user-attachments/assets/cf75bbcd-ed89-4dac-8f5b-1cb43cd77f78" />
<img width="1920" height="969" alt="Screenshot (4031)" src="https://github.com/user-attachments/assets/33991bfd-5b35-4190-9be3-86b1524debb0" />
<img width="1920" height="980" alt="Screenshot (4030)" src="https://github.com/user-attachments/assets/6ae799f9-89a7-4b9d-b8cc-25d348e6c477" />

### ۴. جستجو و فیلتر کاربران 

- جستجوی کاربران بر اساس نام.
- جستجو بر اساس ایمیل.
- جستجو بر اساس شناسه کاربر (`ID`).
- جستجو بر اساس نقش کاربر (`Role`).
- جستجو بر اساس وضعیت حساب کاربری (فعال یا غیرفعال).
- فیلتر کردن کاربران بر اساس نقش.
<img width="1920" height="960" alt="Screenshot (4035)" src="https://github.com/user-attachments/assets/2de827aa-e05f-4201-bdf8-05719b401443" />
<img width="1920" height="921" alt="Screenshot (4034)" src="https://github.com/user-attachments/assets/dc93d83c-a131-494e-b0d7-e6d6405d7c15" />


## کامپوننت‌های پروژه 

در این پروژه از کامپوننت‌های زیر استفاده شده است:

- `Login` – مدیریت فرآیند ورود کاربران به سیستم.
- `UsersPage` – کامپوننت والد صفحه مدیریت کاربران.
- `UsersHeader` – شامل بخش جستجو و فیلتر کاربران.
- `UserTable` – نمایش لیست کاربران و عملیات قابل انجام روی ان ها.
- `AddUser` – مدیریت فرم اضافه کردن کاربر جدید.
- `UserEdit` – امکان ویرایش اطلاعات کاربران.
- `UserDetail` – نمایش جزئیات کامل اطلاعات یک کاربر.

## ارتباط بین کامپوننت‌ها

برای تمرین ارتباط بین کامپوننت های والد و فرزند، صفحه لیست کاربران به صورت زیر طراحی شده است:

- `UsersPage` به عنوان کامپوننت والد.
- `UsersHeader` به عنوان یکی از کامپوننت های فرزند.
- `UserTable` به عنوان کامپوننت فرزند دیگر.

برای انتقال داده بین کامپوننت ها از دکوریتورهای `@Input()` و `@Output()` در Angular استفاده شده است.

## محافظت از مسیرها

برای کنترل دسترسی به صفحات مختلف و جلوگیری از ورود غیرمجاز، از Route Guard استفاده شده است.

مسیرهای محافظت‌شده پروژه:

- `/users` – صفحه لیست کاربران؛ فقط کاربران وارد شده به سیستم امکان دسترسی دارند.
- `/users/new` – صفحه اضافه کردن کاربر جدید.
- `/users/edit/:id` – صفحه ویرایش اطلاعات کاربر بر اساس شناسه.
- `/users/detail/:id` – صفحه مشاهده جزئیات کاربر بر اساس شناسه.

گاردهای مربوط به این مسیرها در پوشه `Shared` قرار دارند.

## اطلاعات اولیه کاربران 

در این پروژه ابتدا یک اینترفیس تعریف شده و سپس با استفاده از آن  یک آرایه از کاربران به صورت پیش‌فرض در سرویس کاربران تعریف شده است تا قسمت ها مختلف پروژه به راحتی به آن و توابع مهم آن دسترسی داشته باشند..

اطلاعات هر کاربر شامل موارد زیر است:

- `id`: شناسه منحصر به فرد کاربر
- `name`: نام و نام خانوادگی
- `email`: ایمیل کاربر
- `password`: رمز عبور
- `role`: نقش کاربر در سیستم (`admin`، `operator` یا `user`)
- `status`: وضعیت حساب کاربری (`true` برای فعال و `false` برای غیرفعال)
- `salary`: حقوق کاربر
- `position`: عنوان شغلی کاربر

### آرایه کاربران پیش‌فرض
می توانید با وارد کردن هر کدام از ایمیل و پسورد های آرایه ی زیر لاگین کنید به شرطی که وضعیت کاربر غیر فعال نباشد.

```typescript
users: IUser[] = [
  { id: 1, name: 'رضا احمدی', email: 'reza.user@example.com', password: 'User@123', role: 'user', status: true, salary: 45000000, position: 'Frontend Developer' },
  { id: 2, name: 'ماهان رضایی', email: 'mahan.operator@example.com', password: 'Operator@123', role: 'operator', status: true, salary: 35000000, position: 'System Operator' },
  { id: 3, name: 'سارا رمضانی', email: 'sara.admin@example.com', password: 'Admin@123', role: 'admin', status: true, salary: 65000000, position: 'System Administrator' },
  { id: 4, name: 'سارا قربانی', email: 'sara.user@example.com', password: 'User@321', role: 'user', status: true, salary: 40000000, position: 'UI/UX Designer' },
  { id: 5, name: 'حسین محمدی', email: 'hossein.operator@example.com', password: 'Operator@789', role: 'operator', status: false, salary: 32000000, position: 'Technical Support Specialist' },
  { id: 6, name: 'مینا اکبری', email: 'mina.user@example.com', password: 'User@456', role: 'user', status: true, salary: 55000000, position: 'Backend Developer' },
  { id: 7, name: 'علی علوی', email: 'ali.admin@example.com', password: 'Admin@456', role: 'admin', status: true, salary: 70000000, position: 'Senior System Administrator' },
  { id: 8, name: 'ندا چراغی', email: 'neda.operator@example.com', password: 'Operator@456', role: 'operator', status: true, salary: 38000000, position: 'Maintenance Operator' },
  { id: 9, name: 'نیما فلاح', email: 'nima.user@example.com', password: 'User@789', role: 'user', status: false, salary: 50000000, position: 'Database Developer' },
  { id: 10, name: 'امیر نیکزاد', email: 'amir.user@example.com', password: 'User@654', role: 'user', status: true, salary: 42000000, position: 'QA Engineer' }
];
```
