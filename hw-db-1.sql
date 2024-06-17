CREATE DATABASE landing_product_db;
CREATE TABLE products(
    id int PRIMARY KEY,
    title text,
    subtitle text,
    description_product text,
    imageProduct text,
    tags text[],
    price_amount integer,
    price_currency char(3)
);
CREATE TABLE orders(
    product_id integer,
    order_email text,
    address text,
    phone text,
    order_quantity integer,
    tags char(4),
    id text -- set here correct uuid
    
);

INSERT INTO products( 
id,
title,
subtitle,
descriptionProduct,
imageProduct,
tags,
priceAmount,
priceCurrency
) VALUES 
(
    1001,
'Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming Paperback – December 4, 2018',
'Completely revised and updated, this best-selling introduction to programming in JavaScript focuses on writing real applications.',
'JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.',
'/product1.jpg',
'{"JS", "learning", "education", "2018", "programming", "IT"}',
10,
'EUR'
),
(
1002,
'Node.js Design Patterns - Third edition: Design and implement production-grade Node.js applications using proven patterns and techniques 3rd ed. Edition',
'Learn proven patterns, techniques, and tricks to take full advantage of the Node.js platform. Master well-known design principles to create applications that are readable, extensible, and that can grow big.',
'Key Features Learn how to create solid server-side applications by leveraging the full power of Node.js Understand how Node.js works and learn how to take full advantage of its core components as well as the solutions offered by its ecosystem Avoid common mistakes and use proven patterns to create production grade Node.js applications Book Description In this book, we will show you how to implement a series of best practices and design patterns to help you create efficient and robust Node.js applications with ease.',
'/product2.jpg',
'{"JS", "learning", "education", "2018", "programming", "IT"}',
46,
'EUR'
),
(
1003,
'Node.js for Embedded Systems: Using Web Technologies to Build Connected Devices 1st Edition',
'How can we build bridges from the digital world of the Internet to the analog world that surrounds us? By bringing accessibility to embedded components such as sensors and microcontrollers, JavaScript and Node.js might shape the world of physical computing as they did for web browsers. This practical guide shows hardware and software engineers, makers, and web developers how to talk in JavaScript with a variety of hardware platforms. Authors Patrick Mulder and Kelsey Breseman also delve into the basics of microcontrollers, single-board computers, and other hardware components.',
'Use JavaScript to program microcontrollers with Arduino and Espruino Prototype IoT devices with the Tessel 2 development platform Learn about electronic input and output components, including sensors Connect microcontrollers to the Internet with the Particle Photon toolchain Run Node.js on single-board computers such as Raspberry Pi and Intel Edison Talk to embedded devices with Node.js libraries such as Johnny-Five, and remotely control the devices with Bluetooth Use MQTT as a message broker to connect devices across networks Explore ways to use robots as building blocks for shared experiences',
'/product3.jpg',
'{"JS", "learning", "education", "2018", "programming", "IT"}',
50,
'EUR'
);