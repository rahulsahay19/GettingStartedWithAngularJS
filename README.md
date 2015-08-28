# Angular Movie Review — Finished Project, building full fledged Angular JS app.

This project is a sample movie review application demonstrating a more fully developed realistic single page
angular application.

### Running the application

open your command line to the root directory of the repository.  run server.sh.

If you are on a windows machine, install the bash shell.  Optionally you may run server.bat.  Note that
after you stop your server, you must change directory back to the root of the project.

Then navigate your browser to `http://localhost:8000/<page>.html` to see the app running in
your browser.  The port may be configured in the scripts/web-server.js file near the top.

### Server

The server is a simple node server that just writes and reads files from the disk in a restful manner.

For more information on AngularJS please check out http://angularjs.org/

### About The Book

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/rsz_kindle_cover.jpg)

#  Getting Started With Angular JS

## Rahul Sahay

## All rights reserved.

## ISBN: 1515037681

## ISBN-13: 978-1515037682

 
Contents

 

Chapter 1: Getting started

Introduction, 11

MVC (Model-View-Controller), 11

Angular Architecture, 12

Angular JS advantages, 15

Comparison with JQuery, 16

Modules, 16

Pre-requisites, 18

Angular movie app review, 19

Angular skeleton project, 46

Download code, 46

Summary, 46

CHAPTER 2: Controllers & Markups

Introduction, 47

Controllers & Scope, 48

Writing first controller, 49

Displaying Repeating information, 57

Handling events, 61

Built-in directives, 70

Event directives, 70

Other directives, 71

Expressions, 82

Filters, 84

Custom filters, 91

Two way binding, 92

Validation, 97

Summary, 103

CHAPTER 3: SERVICES

Introduction, 104

Creating Custom service, 105

Creating user page, 108

Built-in services, 121

Using $http & $q service, 122

Angular js graph, 129

Using $resource service, 130

Using cache factory service, 136

Using compile service, 141

Using parse service, 145

Using locale service, 146

Exception handler service, 149

Filter service, 151

Creating auth service, 153

Summary, 164

CHAPTER 4: Routing

Introduction, 165

Adding first route, 165

Adding more routes, 170

Parameterized routes, 173

Default route, 181

Using location service, 182

Summary, 184

CHAPTER 5: CREATING CUSTOM DIRECTIVES

Introduction, 185

Creating first directive, 185

Encapsulating elements, 189

Isolating directive scope, 194

Handling events, 201

Using controllers, 202

Using require, 205

Directive priority, 207

Nested directives, 208

Summary, 210

CHAPTER 6: TESTING ANGULAR

Introduction, 211

Installing karma, 211

Webstorm settings, 216

Testing controllers, 222

Testing service, 227

Writing ajax test, 228

Writing filter tests, 230

Writing end-to-end tests, 232

Debugging tips, 237

Yeoman, 239

Summary, 255

CHAPTER 7: GETTING STARTED WITH ANGULAR2 & TYPESCRIPT

Introduction, 256

Features, 256

Creating New Project, 258

Creating Components, 259

Embedding Components, 260

Using Babel, 261

Using TypeScript, 263

Using TypeScriptWith Angular, 265

Configuring TypeScript in WebStorm, 268

Configuring File-Watcher, 269

Creating Angular App, 274

Visual Studio Code Glimpse, 279

Summary, 289

About the author, 290

##Preface

Hello and welcome to Getting Started with Angular JS. JavaScript has come a long way since its inception. It used to be client-side validation language than full featured web framework. JQuery has done many changes on the top of JavaScript in order to stabilize the cross browser issues especially. However, JQuery has been written with a different intention. It has been crafted for DOM manipulation. However, JQuery was unable to provide key concepts like modularity, testability, reusability and other basic stuffs which developers need on day-to-day basis. Each JQuery project looks very different from each other, as there has not been any mandate to stick to the conventions.

Angular JS fills this gap very nicely by providing a wrapper around JQuery on the top of DOM especially in the areas of writing boilerplate code and making application more maintainable, reusable and testable. Angular JS been written by keeping testing in mind. Hence, it ensures that each and every piece of Angular JS is testable. Angular JS fits in all the scenarios where in basic stuffs like Data-Driven programming, Declarative programming, and Modular programming is required. Angular JS is evolving very rapidly. Their development team and community are adding tons of useful features to this library to make the same more robust and useful.

##Who This Book Is For

This book is for anyone who wants to get started with Angular JS development. However, I do expect from readers that they should have basic knowledge of JavaScript before getting started with Angular JS. This book will be starting from angular introduction to advanced topics like directives, services, testing and many more things. Hence, sit back, take a deep breathe, relax and then start systematically. Skipping any chapter in between is not advisable for beginners.

##FROM THE MANAGER'S DESK

Today, no web developer worth his salt can afford to ignore learning concepts and tools required to develop SPA applications. There is a need today more than ever before to develop applications faster, modular, so large distributed teams with diverse skill sets can work in parallel to create an application that can provide the best of user experience and yet be performant, maintainable, extendable and testable. AngularJS is the framework to go to achieve all the above goals.

This book is an excellent resource for anyone beginning to learn Angular. Rahul has been extremely diligent in coming up with examples that are real world like and yet do not take away the reader's attention from angular concepts he is trying to explain. The concepts are first clearly explained followed by code for building a moderately complex application. Each area of Angular is thoroughly dealt with including the tools in Angular eco system such as WebStorm, Visual Studio Code, Karma, and Yeoman. Overall, it is an enjoyable and informative read.

SITA, T
Senior Manager
Dell

 
##FOREWORD

AngularJS has come a long way since its inception in 2009. Its initial success was spectacular when it helped to reduce 17,000 lines of code to 1,500 lines of code at Google in the Google Feedback project. Hevery, a developer in the Google Feedback project, could rewrite the code that was written over 6 months in flat 3 weeks using the AngularJS framework. Moreover, the product that was built in 3 weeks was also of a better quality in terms of ease of testing. This initial success of this platform made many Googlers support continuous development of this open source framework.

This book has done an excellent job in introducing this able platform to software developers. Rahul Sahay, the author has built an example web application, which has helped to reinforce the concepts of the project through practical implementation. The book will serve as a good tutorial and a good reference for all the developers who want to leverage the enormous capability of the AngularJS framework. With Single Page Applications and other associated frameworks such as Node.js getting popular and popular, this book is being released at an apt time. Enjoy the technical feast!

Piram Manickam
Senior Architect
Dell

##How this book is structured

###Chapter 1, Getting Started

Starts by explaining what is Angular, why it is needed? How it fits in web application. You will also learn the overview of Angular JS. Then, you will understand how to build Single Page App.

###Chapter 2, Controllers & Markups

In this chapter, you will learn scope and controller, which is the nerve of any ng app. Then, writing your first controller. Here, you will be using different ng pieces to display the info on the page via controller.You will also see directives, filters, and expressions in action. Then, in the end, you will be able to do client side validation for the page.

###Chapter 3, Services

Services are very important ingredient in angular application. You will begin this section, by learning what are services, how do you create them and then how to register the same with angular app. After that, you will be using some built-in angular services and writing custom services for specific scenarios. Here, I have also introduced Angular JS Graph to visualize the app in console.

###Chapter 4, Routing

Routing is the place, where you actually convert your angular app into Single Page App. You will learn how to configure the routes. Then, you will also learn how to configure Parameterized routes. Last but not the least you will be using location service with routes.

###Chapter 5, Creating Custom Directives

In this section, you will learn how to get started with custom directives design. Why do you need them in any angular app? How it enhances the reusability and maintainability of the code? You will also learn how to encapsulate elements. Then, you will learn how to isolate the scope from the parent scope and many things that are more relevant which is required on day-to-day basis for any angular app.

###Chapter 6, Testing Angular

This is the last chapter of this book where in you will learn how to get started with Angular Testing. First, you will learn how to setup the dev environment to launch the Karma Test runner. Then, you begin this section by writing simple controller tests. Afterwards, you will be learning how to write different kinds of tests and in the end, there will be a bonus section, where in you will learn how to inspect and troubleshoot your angular app.

###Chapter 7, Getting Started With Angular 2 & TypeScript

This is the last chapter of the book where you will get the feel of upcoming Angular 2.0 version. Here, you will get started with new angular features. Then, we will see how to get started with angular 2.0 with simple demos using Typescript, ES6 and ES5 as well. After understanding TypeScript basics, we will build one small Movie-Review version with TypeScript & Angular.

###Acknowledgements

Again, this book would not have been possible without the loving support of my wife Nivi, who had to take over much of the household responsibility apart from her teaching activities. Appreciation also goes out to my Mom and Dad for believing in me and always keeps on encouraging me to complete the book in a best possible way. Moreover, I would also like to thank Sita and Piram for sharing their views on the book. In addition, I would also like to thank Arun and Mayank for doing the technical review and suggested few changes around it.

In the end, you know how it is, you pick a book and flip to Acknowledgement’s page and find that author has once again dedicated the book someone close to him, not to you. Not this time. I would like to thank all the readers whole-heartedly for choosing the book. Finally, I would like to thank readers of my blog (http://myview.rahulnivi.net). Many of you have contributed by asking questions, providing feedback, and inspiring and encouraging me in everything, I do.

 
##Chapter 1: Getting Started

 ###WHAT DO you find in this CHAPTER?

* Introduction
* MVC (Model-View-Controller)
* Angular Architecture
* Angular JS Advantages
* Comparison with JQuery
* Modules
* Pre-requisites
* Angular Movie App Overview
* Angular Skeleton Project
* Download Code
* Summary

##Introduction:-

Hello and welcome to Angular JS world. In this section, we will get started with Angular JS. As per google, Angular JS is a superheroic JavaScript framework. They say this because Angular JS does so much heavy lifting for us, which we need in any web app on day-to-day basis. It provides a consistent scalable architecture that makes it easy to develop large web application out of the box. The best part of Angular JS is, everything done in the Angular JS library itself. Hence, it does not mandate to learn any other programming language. However, Angular JS is derived from certain basic programming standards that is MVC or MVVM, which we will be discussing next.
MVC (model-view-controller):-

The Core concept behind Angular JS is MVC Architectural Pattern. MVC stands for Model-View-Controller. MVVM (Model-View-ViewModel) also similar to MVC, just a design pattern to separate the units of responsibility in different containers. This kind of design pattern gives developers a sense of architectural thinking that how they want to separate the different layers of their web application. MVC design pattern splits the app into three distinct pieces. They are-

 * Model: - Model is nothing but data repository for the application usually fetched from the server and   served on the web page via controller. Hence, any web application that is not static, which is getting data is coming via model only.

 * View: -  View is nothing but the presentation layer of web application. You can also think view as generated HTML. Views are basically dynamic in nature as it entirely depends on the data being fetched from the server and how it is finally presented.

* Controller: - Controller is the central processing unit of any app that is based on MVC design pattern. Once user requests the page, that is getting intercepted by controller and then controller decides where to pick the data from and finally pick which template.

As a result, each unit is responsible for one and only thing. Model means data, View means UI and controller is the business logic. Moreover, each unit is independent of each other, which makes angular more robust, unique and easy to maintain.
Angular Architecture:-

In this section, we will learn more about Angular JS architecture. However, before discussing angular architecture, let us discuss conventional web application architecture in brief. As you can see in the below diagram, whenever you make a request it is going to server and fetching the entire asset time and again which is very resource intensive, hence puts pressure on the bandwidth, on the server and end result is site response time is slow.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/166th.png)

However, in case of angular, it loads all the assets and required components in the first load only. Then, whenever next request comes for any different link on the page, it only replaces JSON there. This way, angular makes any app very lightweight and fit for any device.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/167th.png)

One more point to note here that modern day apps needs that universal architecture support which means you write once and use everywhere like shown below.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/168th.png)

##Angular js advantages:-

In this section, we are going to discuss the Angular JS benefits. However, from the previous section, you might have got the glimpse of benefits of angular.

* Angular JS is SPA (Single-Page-Application) framework with client side templating and heavy usage of JavaScript throughout the app. As I said initially, Angular JS does all the heavy lifting required to make a web app up and running, so that we can focus on core functionality.

* Since, there are many things already built in Angular JS framework, hence it needs only proper API implementation to get the functionality running rather than using JQuery. 

* As, I said, Angular is built on the top of MVC design pattern. Hence, it helps keep your code modular, maintainable, reusable and testable.

* Angular JS declarative nature gives a snapshot to developer by just looking at the code that what would have been intention behind writing this code.

* Angular JS supports many third party libraries, which people need as to style the app, notify the users and many other use cases that people need on day-to-day basis.

Comparison with Jquery:-

In this section, we will do a brief comparison between JQuery and Angular JS. I have mentioned detailed side-by-side comparison between the two in below table.
Features 	        JQuery 	      Angular JS
Abstract The DOM	   Y	         Y
Animation Support	   Y	         Y
AJAX/JSONP	           Y             Y
Cross Module Communication Y	         Y
Deferred Promises	   Y	         Y
Form Validation	           N             Y
Integration Test Runner	   N	         Y
Unit Test Runner	   Y	         Y
Localization	           N	         Y
MVC Pattern	           N	         Y
Template	           N	         Y
Two-way Binding	           N	         Y
One-way Binding	           N             Y
Dependency Injection	   N	         Y
RoutingRestful	           N	         Y

However, JQLite is already built-in in angular. Hence, you do not need to explicitly use JQuery for any DOM manipulation. You can use JQuery stuffs by calling like angular.element().
Modules:-

Modules in Angular JS are one of the key reasons for keeping application modular. Below is the simple diagram of modules briefly.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/182nd.png)

As you can see in the above screen shot, modules let you create all underlying pieces. All these pieces we will understand piece by piece in coming chapter. One more point to understand an angular application can have as many modules as required and all of these are dependent on each other like shown below.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/183rd.png)

Hence, if your app module is dependent on some other module, then that dependent module can be injected before executing the actual app module. We will see all these things in detail in coming chapters.
Pre-Requisites:-

As far as pre-requisites are concerned, there are actually no pre-requisites except basic knowledge of JavaScript. However, few things that I would like to tell here; I am mean which I have used while writing the app.

Editor: - My choice for writing JavaScript app is WebStorm. You can get the same from here (https://www.jetbrains.com/webstorm/). This is the best JavaScript editor, I have used so far. However, there is no such mandate to use the same. You can use any of the editors listed below-

*     Visual Studio
*     Eclipse
*     Visual Studio Code
*     Brackets
*     Sublime and many more

Angular movie app review:-

I always like talking about the application, which you will be building here, with app snapshots, first. Below is the home page of the application.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/169th.png)

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/170th.png)

Now, when you click on any of these movies, it will take you to the corresponding pages as shown below-

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/171th.png) 

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/172nd.png)

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/173rd.png)

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/174th.png)

Similarly, you can post new movie like shown below.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/175th.png)

You will also learn how to write client side validation like shown below.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/176th.png)

Moreover, when everything goes well, then Post Movie button will enabled as shown below.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/177th.png)

As you can see that, once image URL pasted there, it produced the relevant image. This is called data binding, which you will learn in coming chapters. Then, when you click Edit profile, it will produce the below screen.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/178th.png)

Here, you will learn the power dynamic data binding on the fly using Angular JS. Like, when I type my email id in email address box, it will fetch my image as shown below.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/179th.png)

Similarly, when you click on the last link, then this will produce the below page.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/182th.png)

Hence, let us suppose if we enter values as shown below in the screen shot, respective cache size value also getting changed.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/184th.png)

Then, you can retrieve the same by providing key as shown below.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/185th.png)

Similarly, you can delete the same based on key or flush entire set. We will discuss all these terminologies in coming chapter. We will go through complete list of directives we generally use on day-to-day basis. However, one directive that I used recently in one demo wanted to show here. This directive is used for embedding you tube videos in your angular application, angular way. Below is the glimpse for the same.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/1st3.png)

I have also explained normal authentication service by enabling user to do registration on the site and then login accordingly as shown below.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/187th.png)

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/188th.png)

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/186th.png) 

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/189th.png)

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/190th.png)

Apart from this, I have also explained how to get started with yeoman scaffolding template generators for angular and other required dependency. You will learn the same in coming chapters. However, below is the short glimpse for the same.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/1st4.png)

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/14th1.png)

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/26th1.png)

After doing improvisation on the generated code, app will look like as shown below.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/40th1.png)

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/41th1.png)

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/login_adv1.png)

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/register_adv1.png)

I have also discussed about Angular2 Features in the last chapter. Then how start with TypeScript and write the angular app using that. Below is the glimpse of the same.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/200th.png)

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/201th.png)

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/206th.png)

Below is the corresponding JavaScript generated code.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/207th.png)

This also produced me the required output at the bottom of the screen in JSON format.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/208th.png)

Then, how to get started with TypeScript with simple TypeScript workflow discussion.

![](http://myview.rahulnivi.net/wp-content/uploads/2015/08/217th.png)

I hope you have enjoyed the app glimpse. Hence, without wasting time let us get started.
Angular skeleton project:-

In order get started with Angular JS, you can download the skeleton project from here (https://github.com/rahulsahay19/Movie-Review-Angular-Skeleton) , if you want to code along with me on the same study. However, it is not necessary to follow this convention. You can surely apply the angular techniques in any angular project that you want.

Download Code:-

You can also download the full finished version from here (https://github.com/rahulsahay19/GettingStartedWithAngularJS).

###Summary:-

In this chapter, we have started with Angular JS overview. We started with basic understanding of angular then we also had a glimpse of MVC structure on which Angular is laid upon. Then, we discussed angular architecture in detail by comparing the same with conventional web-app architecture. We have also done concise comparison with JQuery, in order to understand how Angular JS fits in modern day web architecture. Then, we summarized this chapter by giving brief overview of the application, which you will be building along.
