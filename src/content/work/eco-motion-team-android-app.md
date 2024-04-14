---
title: Eco Motion Team Android App
publishDate: 2020-03-02 00:00:00
img: /assets/emt-image.jpeg
img_alt: EMT Image
description: |
  I designed an Android application for the "PolyWatt" dashboard!
tags:
  - Dev
  - Electrical engineering
  - Network
  - Conception
  - Design


---

### The Eco Shell Marathon
This year, I am a member of the Eco Motion Team, a team that participates annually in the Shell Marathon, organized by the company of the same name. This demanding European competition challenges students to design, build, and drive vehicles that are ultra-efficient in terms of energy. Polytech Nancy has been participating in this event for 25 years, with over 400 engineering students having already participated, often breaking numerous records. This year, I had the opportunity to join the team as a member of the continuous improvement group. My project involved designing and optimizing the dashboard of the "PolyWatt" our vehicle for the competition.

### My project
My project is divided into two main parts. The first part involves designing a Joule meter to collect various vehicle data: battery voltage, energy consumption, speed, remaining laps, etc. These data will be sent via optical fiber to the dashboard, which represents the second part of my project. The dashboard is represented by an Android application that attaches to a 3D mount on the vehicle's dashboard. This Android application, programmed in Java and XML, allows the driver to follow certain indications to optimize their runs and improve their race times. The application also enables the driver to know the vehicle's speed by simultaneously connecting to around twenty satellites to obtain precise vehicle speed. Additionally, the application allows the vehicle's consumption data to be sent to the EMT website via websockets. These data are retrieved directly from the phone's USB-C port using optical fiber communication to avoid any data loss and ensure transmission speed. The data received on the website will be used by the team to strategize and simulate different runs, as the application also provides the exact position to the website during the race. The Joule meter itself is based on an ESP32 Lolin Lite with exceptional computational speed and an external ADC allowing precise measurement of battery voltage and current passing through it. Based on this data, the vehicle's power consumption is calculated.

This project has allowed me to showcase my knowledge in electrical engineering for the data transmission part and design of the Joule meter, as well as my skills in Android application development and networking, which ensured the proper transmission of data to the website. Additionally, it showcased my skills in 3D design, as I also designed the dashboard mount and the printed circuit boards for the Joule meter.


