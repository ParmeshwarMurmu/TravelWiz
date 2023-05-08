# imaginary-carpenter-5479
Construct Week Project

# Installation
1.npm i json-server

2.To start backend -> npm start

# Note
pull it on your main branch and not in your particular branch


# 🏫 Library Management System 📚
### JS-VITE-WITH-MOCK-SERVER

Please do NOT use VSCode live-server. It will not work. Use the npm commands suggested to you here.

## Installation
```
npm install --engine-strict
```
## Start only the Backend server
```
npm run server
```
## Start only Frontend server
```
npm run start
```
## Start both BE & FE in a single command
```
npm run watch
```
# Important files
```
├── index.html
├── scripts
│   └── main.js
└── styles
    └── style.css
```
## Maximum Marks - 15

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

## Rubrics
```
✅ able to submit the app - 1 mark ( minimum score )
✅ Shows the correct initial data - 3 marks 
✅ Able to add new book - 2 marks
✅ Able to delete a book - 2 marks
✅ Able to edit all fields of the book - 2 marks
✅ Able to edit the price - 1 mark
✅ Sorts as expected - 1 mark
✅ Filters as expected - 1 mark
✅ Able to search by title - 1 mark
✅ Able to search by the author - 1 mark
```
### You haven't been taught Cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

## Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

# Problem statements

### Problem 1. List of books on page load [3]
On page `load`, a list of all `books` should be shown in the  `div#data-list-wrapper`. 

Expected markup (Book card list):
<!-- ![landingpage markup]() -->
<img src="https://user-images.githubusercontent.com/101581634/234861038-20358f44-6ffd-42a8-b555-08f1784c692d.png" width="100%"/>
- The `div.card` is a card appended to the div with `div.card-list` where all such cards are appended.

Expected markup (example single card div inside card-list div): 
<!-- ![bookMarkUp]() -->
<img src="https://user-images.githubusercontent.com/101581634/234864812-5663b933-95a5-408a-835e-06a5cc67d813.png" width="100%"/>

- **Markup - elements, classes & IDs should be identical to the above screenshot.**

- The **Card** with `div.card` and `data-id={id of div}` having two child div 
  1. The `div.card-image` in this image of the book is present.
  2. The `div.card-body` in this 
    - h4 tag with `h4.card-title` **with title of book**.
    - p tag with `p.card-author` with the author of the book
    - p tag with `p.card-category` with category of book
    - p tag with `p.card-price` with the price of a book
    - anchor tag with `a.card-link` with `Edit` text
        -  class= card-link
        -  href=#
        -  data-id= id of the book 
    - button with `button. card-button` with `Delete` text 
        -  class= card-button
        -  data-id= id of the book

Expected UI (example card):
<!-- ![bookUI]() -->
<img src="https://user-images.githubusercontent.com/101581634/235060554-78287a66-75ee-4c10-8365-c3d44864a19e.png" width="100%"/>

Data mapping:
<!-- ![dataMarkUp]() -->
<img src="https://user-images.githubusercontent.com/101581634/235060568-d8b51431-11e8-45ac-866c-c2cb9dae3d9f.png" width="100%"/>

- The data should be fetched from `${baseServerURL}/books`
- The books should be shown on page `load`

### Problem 2. Ability to add new Books [2]
<!-- ![add book ] -->
<img src="https://user-images.githubusercontent.com/101581634/235060588-2499d6c6-4f61-4a25-97ed-fdd18fa677ed.png" width="100%"/>

- make a 'POST' request at ```${baseServerURL}/books```
the page must not reload
the list must update

<!-- ![added book UI]() -->
<img src="https://user-images.githubusercontent.com/101581634/234911011-33340c63-6387-4826-a4f1-cce636f9b710.png" width="100%"/>

### Problem 3. Ability to delete a Book [2]
- In each book, the card adds a button `Delete` with `button.card-button` on clicking this button particular book must be removed from DOM as well as `db.json`.

- make a 'DELETE' request at ```${baseServerURL}/books/{bookId}```
the page must not reload
the list must update

### Problem 4. Ability to update all the fields of a book [2]

- Able to populate the following input on edit link click.
- add an event listener with ```click``` to anchor tag with class `.card-link` use preventDefault.
- The page should not re-load on the click of the EDIT link `.card-link`.

1. To update all fields 

- `#update-book-id`  should be populated with the `id` of the book 
- `#update-book-title` should be populated with the `title` of the book
- `#update-book-image` should be populated with the `image URL` of the book
- `#update-book-author` should be populated with the `author` of the book
- `#update-book-category` should be populated with the `category` of the book
- `#update-book-price` should be populated with the `price` of the book

<img src="https://user-images.githubusercontent.com/101581634/235060572-a3de7f7c-c9ef-48a0-af24-90880a463121.png" width="100%"/>

- make a 'PATCH' request at ```${baseServerURL}/books/${bookId}``` to updated *title , image ,author ,category and price*
- the page must not reload
- the list must update

### Problem 5. Ability to update only the Price [1]

- Able to populate the following input on edit link click.
- `#update-price-book-id` should be populated with the `id` of the book
- `#update-price-book-price` should be populated with the `price` of the book

- Once the edit inputs are populated, if the user clicks `#update-price-book` button. 
- the price of that particular book should update based on the value entered in the `#update-price-book-price`. 
- The price of the book in the list should update without any page *reloads*.

- make a 'PATCH' request at ```${baseServerURL}/books/${bookId}```

### Problem 6. Sorting Books Based on Price [1]
- Sorting for `Low to High` UI:
<!-- ![sort Low to high] -->
<img src="https://user-images.githubusercontent.com/101581634/235060584-78f67972-8ccb-4728-aa26-015c0e398e01.png" width="100%"/>

With the click of the button `#sort-low-to-high`, the book list should be sorted in ascending order based on their *price*.

With the click of the button `#sort-high-to-low`, the book list should be sorted in descending order based on their *price*.

You may use any approach of your choice for sorting. You may sort the available data or you may make a new fetch request to the server and update the list. In case you want to fetch data, please use the [JSON Server documentation](https://github.com/typicode/json-server).

### Problem 7. Filtering Books based on the category [1]
 You have to create three types of filters as
 1. ***Classic***
 2. ***Fantasy***
 3. ***Mystery***
- Filtering for `Fantasy` UI:
<!-- ![filter fantacy] -->
<img src="https://user-images.githubusercontent.com/101581634/235060576-71febb24-2776-48bd-baa3-820340337bf8.png" width="100%"/>

When the button `#filter-Classic` is clicked, the book list is expected to be filtered. It should only show the books whose `category` is ***`Classic`***.

When the button `#filter-Fantasy` is clicked, the book list is expected to be filtered. It should only show the books whose `category` is ***`Fantasy`***.

When the button `#filter-Mystery` is clicked, the book list is expected to be filtered. It should only show the books whose `category` is ***`Mystery`***.

You may use any approach of your choice for filtering. You may filter the available data or you may make a new fetch request to the server and update the list. In case you want to fetch data, please refer to the [JSON Server documentation](https://github.com/typicode/json-server).

### Problem 8. Search by title/author [1+1]
- To implement search functionality on top there is a select tag with *options* as to search by category  
 1. ***`title`***
 2. ***`author`***
<!-- ![search by title] -->
<img src="https://user-images.githubusercontent.com/101581634/235060578-5d444e0f-9d97-4ac0-bca4-cafe1688b39a.png" width="100%"/>

first select(`select#search-by-select`) category and then type input (`input#search-by-input`) value for `title name` / `author name` and apply to `booksData` on click of search button(`button#search-by-button`).

You may use any approach of your choice for search functionality. You may use the available data or you may make a new fetch request to the server (with params as ***`?${title/author}_like=${title name/author name}`***) and update the list. In case you want to fetch data, please refer to the [JSON Server documentation](https://github.com/typicode/json-server). 


***Note***:- Get the updated data from API after POST,PATCH or DELETE request is done.


### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
- Use `${baseServerURL}/what-ever-route` for server url & not `localhost:9090/what-ever-route` in your solution. Failing to do so may cause all the tests to fail.
