# imaginary-carpenter-5479
# TravelWiz 

Please do NOT use VSCode live-server. It will not work. Use the npm commands suggested to you here.

## Installation
```
npm i json-server
```

## Start Backend Server
```
npm start
```

## Features
```
✅ Linking Of One Page To Another
✅ HTTP Request GET POST PUT PATCH DELETE
✅ Slide Show 
✅ Sorting
✅ Filtering
✅ Pagination
✅ Deleting
✅ Updating
✅ Text Search
✅ Responsive
```

## Table Of Content
- Filter
- Paginate
- Sort
- Full-text Search
- Database
- Homepage

## Filter
```
GET /travel?title=json-server&category=InterNational
GET /travel?title=json-server&category=National

```
![filter](https://user-images.githubusercontent.com/121368970/236733570-6710a31d-671e-4e9b-9f7f-99e271b11802.png)


## Pagination
Use ```_page``` And Optionally ```_limit``` To Paginate Returned Data
```
GET /travel?_page=3
GET /travel?_limit=5&_page=3
```


## Sort
Add ```_sort And ```_order```(Ascending Order By Default)

```
GET /travel?_sort=price&_order=asc
GET /travel?_sort=city&_order=desc
GET /travel?_sort=price&_order=desc
```

![Sorting](https://user-images.githubusercontent.com/121368970/236696358-5ebb1a80-a9ec-4970-aa7e-f60879be79fd.png)


## Full-text Search
Add ```q``` Which is Query (Text You Want To Search)
```
GET /travel?q=paris
GET /travel?q=goa
GET /travel?q=InterNational
```
