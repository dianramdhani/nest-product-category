
# Nest Product Category

Eksplorasi integrasi database dalam waktu 1 jam.


## Kasus

Anda diminta untuk membuat sebuah aplikasi backend untuk sebuah toko online yang menjual produk-produk berbagai kategori. Aplikasi ini harus mampu melakukan operasi CRUD (Create, Read, Update, Delete) pada produk dan kategori, serta melakukan validasi inPATCH. Aplikasi backend harus dapat menerima request dari aplikasi frontend dalam format JSON dan menyimpan data ke dalam database.


### Spesifikasi

- Buatlah sebuah database MySQL dengan tabel "products" dan tabel "categories". Tabel "products" memiliki kolom "id", "name", "price", "category_id", "description", dan "created_at". Kolom "id" merupakan primary key, dan harus auto-increment. Tabel "categories" memiliki kolom "id" dan "name", dengan "id" sebagai primary key.

- Buatlah sebuah API endpoint "/categories" yang dapat menerima request dengan method GET, POST, PATCH, dan DELETE. Hanya pengguna dengan role "admin" yang dapat melakukan operasi CRUD pada kategori. Response harus dalam format JSON.

- Buatlah sebuah API endpoint "/products" yang dapat menerima request dengan method GET, POST, PATCH, dan DELETE. Hanya pengguna dengan role "admin" yang dapat melakukan operasi CRUD pada produk. Response harus dalam format JSON.

- Buatlah validasi inPATCH pada API endpoint "/categories" dan "/products". Jika inPATCH tidak valid, API harus memberikan response dengan status code 400 dan body dalam format JSON yang berisi pesan error.

- Buatlah pagination pada API endpoint "/products". Setiap request GET ke API endpoint "/products" harus menyertakan parameter "page" dan "limit", di mana "page" adalah nomor halaman dan "limit" adalah jumlah produk per halaman. Response harus berisi data produk pada halaman tersebut, serta informasi jumlah total produk dan jumlah halaman.


## Spesifikasi API

### API Endpoint "/categories"

- **GET /categories** untuk mengambil semua kategori

- **GET /categories/:id** untuk mengambil sebuah kategori berdasarkan ID

- **POST /categories** untuk menambahkan sebuah kategori baru

- **PATCH /categories/:id** untuk mengubah sebuah kategori berdasarkan ID

- **DELETE /categories/:id** untuk menghapus sebuah kategori berdasarkan ID

### API Endpoint "/products"

- **GET /products** untuk mengambil semua produk dengan opsi pagination

- **GET /products/:id** untuk mengambil sebuah produk berdasarkan ID

- **POST /products** untuk menambahkan sebuah produk baru

- **PATCH /products/:id** untuk mengubah sebuah produk berdasarkan ID

- **DELETE /products/:id** untuk menghapus sebuah produk berdasarkan ID

### Request Body Format (Payload)

- Untuk POST dan PATCH /products

```json
{
  "name": "nama_produk",
  "description": "deskripsi_produk",
  "price": 10000,
  "category_id": "605f594c9bb6fb9f53b76c3d"
}
```

- Untuk POST dan PATCH /category

```json
{
  "name": "nama_kategori",
  "description": "deskripsi_kategori",
}
```

### Response Body Format

- Response body untuk GET /categories:

```json
[
  {
    "id": "605f594c9bb6fb9f53b76c3d",
    "name": "nama_kategori",
    "description": "deskripsi_kategori"
  },
  {
    "id": "605f594c9bb6fb9f53b76c3e",
    "name": "nama_kategori_2",
    "description": "deskripsi_kategori_2"
  }
]
```

- Response body untuk GET /categories/:id:

```json
{
  "id": "605f594c9bb6fb9f53b76c3d",
  "name": "nama_kategori",
  "description": "deskripsi_kategori"
}
```

- Response body untuk GET /products/:id:

```json
{
  "id": "605f594c9bb6fb9f53b76c3f",
  "name": "nama_produk",
  "description": "deskripsi_produk",
  "price": 10000,
  "category": {
    "id": "605f594c9bb6fb9f53b76c3d",
    "name": "nama_kategori",
    "description": "deskripsi_kategori"
  }
}
```