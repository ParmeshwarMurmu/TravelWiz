# imaginary-carpenter-5479
# TravelWiz 
### Objective

The main objective of a traveling website is to provide valuable travel information, inspiration, and booking services to visitors. This includes helping travelers plan their trips by offering information on destinations, accommodations, activities, and local culture. The website should also aim to provide a seamless user experience and offer reliable and convenient booking services for flights, hotels, rental cars, and other travel-related services. Ultimately, the main objective of a traveling website is to enhance the overall travel experience for visitors and help them create unforgettable memories.

# Netlify
https://animated-starship-cbbae1.netlify.app/

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

![Pagination](https://user-images.githubusercontent.com/121368970/236737298-1748005d-2c41-4712-9222-bfe61bbc8b4a.png)



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
![search](https://user-images.githubusercontent.com/121368970/236736770-2561e66d-737a-45c0-baf4-134abe65e8d5.png)


# Home Page
![Home Page](https://user-images.githubusercontent.com/121368970/236737986-e27cfe27-1294-433f-973d-de8d3c217053.png)

# Sign Up and Login
![sign up](https://user-images.githubusercontent.com/121368970/236738769-e28ebf0e-3394-44a2-a13d-20614f3ee36d.png)
![login page](https://user-images.githubusercontent.com/121368970/236738809-5a022269-fde5-4249-9145-74e88c75c4db.png)


# Destination Page
![designation page](https://user-images.githubusercontent.com/121368970/236739322-e25a55a4-61aa-4780-9588-a6be9aaf79ac.png)


# Booking Page
![Booking](https://github.com/ParmeshwarMurmu/imaginary-carpenter-5479/assets/121368970/147f2b05-c9dc-4182-8406-298d687e5f25)


# Footer Section
![footer](https://github.com/ParmeshwarMurmu/imaginary-carpenter-5479/assets/121368970/4e5f5705-61a4-4b2d-b8a4-171925a7634f)


