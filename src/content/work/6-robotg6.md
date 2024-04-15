---
title: The G6-Robot
publishDate: 2020-03-02 00:00:00
img: /assets/robot-g6.png
img_alt: RobotG6 Image
description: |
  We created a robot from A to Z!
tags:
  - Design
  - Algorithmic
  - Electrical engineering
---

### Objective: 
I had the opportunity, as part of a module, to design a robot from A to Z that had to be able to navigate out of any room without prior knowledge of the room layout, without using GPS, and with only two servo motors, an ultrasonic sensor, and an Arduino Uno.

As the leader of Group 6, hence the name of the robot "RobotG6," we divided the tasks among our team of three. One team member, skilled in mechanical design, handled the mechanical aspects, while another, proficient in algorithms and diagram design, managed those areas. I took responsibility for the electrical engineering aspect and the 3D design of the entire robot using Fusion 360.

We organized ourselves by writing reports after each session and by planning the various tasks to be performed on a Gantt chart.

### Arduino Program:
The robot followed a program that involved wall-following behavior, periodically turning to the right to check for an exit. If none was found, it continued moving straight ahead. When it detected a wall in front, it turned left.

### Electrical Schematics:
We added a button to facilitate robot startup and an OLED screen to display the robot's current step. We used KiCad software to create an Arduino shield, simplifying the electrical connections between the different components.

### Design:
Due to component limitations, we opted for a robot with two rear drive wheels and a caster ball at the front. We positioned the ultrasonic sensor at the front, ensuring it was protected by the chassis. The 7.2V battery and Arduino board were placed inside the robot's body, ensuring a balanced center of gravity. The design of the wheels included grooves to prevent slipping, with elastic bands providing additional traction.

### Conclusion:
This project, encompassing various engineering fields, allowed us to learn how to coordinate as a group while adhering to specifications and deadlines, thereby reinforcing theoretical knowledge acquired during our studies at Polytech Nancy.