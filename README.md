# Coding-Challenge

## SETUP

After cloning the repository run `npm install` and `npm start` to start the development server.

## The Beauty List

## Task
The task is to create a simple Webapp consisting of two pages. The App is gonna be pure frontend and should be written in React with the help of a little bit of Redux for state management. You will be using the MakeUp Api to feed your app with data: https://makeup-api.herokuapp.com/
Please read the api instructions carefully, and only fetch what you need.

### Page 1 - List Page
The list page contains two main components: a filter-bar and a list of products.

##### The Filter-Bar
The filterbar will be used to filter the products in the list. The filter bar consists of two inputs. A text input, and a select input.
The Text input should filter the list by name and the select input should filter the list by brand.
Both filter functionalitys should happen in realtime as the user changes something in the inputs. So NO submit or apply buttons.

Bonus Points if you implement more filter Fields.

##### The List
Is a list of products. The list should always ONLY contain the products of one specific brand. So make sure there is always one brand selected in the filter by default. If the filter, does not return any products, a text stating "No products to be displayed" should show. Each Item in the list should display the name of the product and its price. When the user clicks on a list item, he should be redirected to the detail page of the choosen product. 

### Page 2 - Detail Page
The detail Page should contain all the information that you get from the Api about that product(including the picture). It is up to you how to arrange and style those informations. The exact product should not only be reachable by clicking it in the list but also by just entering its url. So each item should have its own unique url.

### Version Control
Please fork this Repository to start working. Commit your changes in a style as if you would be working a small team. Display that you know how to use branching, rebasing, merging and so forth. 

### Bonus Points
We are looking for a coder, not a designer so don't worry if your app does not look like an absolute beauty. However Bonus Points if you can come up with a cool design and clean css. 
Unit and Integration Test are not mandatory for this challenge, but Bonus Points if you can find the time to implement them as well. 

