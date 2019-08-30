# Connectronic API

# Documentation

API REST created to returned Category CRUD.


**Index Categories**
----
  Returns json data about a multi categories.

* **URL**

  /categories

* **Method:**

  `GET`

*  **URL Params**

   **Required:**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{ id : 12, name : "Limpeza", description : "Produtos de Limpeza" }]`

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Categories doesn't exist" }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/categories",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```


**Show Category**
----
  Returns json data about a single category.

* **URL**

  /categories/:id

* **Method:**

  `GET`

*  **URL Params**

   **Required:**

   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id : 12, name : "Limpeza", description : "Produtos de Limpeza" }`

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Category doesn't exist" }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/categories/12",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```


**Store Category**
----
  Returns json data about a single category.

* **URL**

  /categories

* **Method:**

  `POST`

*  **URL Params**

   **Required:**

   `name=[string]`

* **Data Params**

  `name=[string]`

  `description=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id : 12, name : "Limpeza", description : "Produtos de Limpeza" }`

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Category doesn't exist" }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/categories",
      dataType: "json",
      type : "POST",
      success : function(r) {
        console.log(r);
      }
    });
  ```


**Update Category**
----
  Returns json data about a single category.

* **URL**

  /categories/:id

* **Method:**

  `POST`

*  **URL Params**

   **Required:**

   `id=[integer]`

   `name=[string]`

* **Data Params**

  `name=[string]`

  `description=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id : 12, name : "Limpeza", description : "Produtos de Limpeza" }`

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Category doesn't exist" }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/categories/12",
      dataType: "json",
      type : "PUT",
      success : function(r) {
        console.log(r);
      }
    });
  ```


**Destroy Category**
----
  Returns nothing data.

* **URL**

  /categories/:id

* **Method:**

  `DELETE`

*  **URL Params**

   **Required:**

   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** None

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Category doesn't exist" }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/categories/12",
      dataType: "json",
      type : "DELETE",
      success : function(r) {
        console.log(r);
      }
    });
  ```
