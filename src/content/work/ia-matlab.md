---
title: IA Facial Recognition
publishDate: 2020-03-02 00:00:00
img: /assets/Facial-recognition-Matlab.png
img_alt: Image AI Matlab
description: |
  I created my first AI on Matlab!
tags:
  - IA
  - Dev
  - User Testing
---
### Objective:
As part of a module attended at Polytech Nancy and following the completion of the Matlab proficiency certificate, we had the opportunity to apply linear algebra concepts combined with image processing notions to perform facial recognition in Matlab.

### Principle of Face Recognition:
The goal is to determine a person's identity from an image of their face. For this purpose, a database of faces is used, where each face is associated with a feature vector. These features are assumed to be invariant for the same person and different from one person to another. Recognition involves comparing the feature vector of the face to be recognized with those in the database to find the most similar face.

### Image Database:
We utilize the Yalefaces1 image database, where faces have been cropped and resized to 64×64 pixels for comparability. This database contains 120 grayscale images representing the faces of 15 individuals, with 8 images per individual based on various expression and accessory variations.

### Importing and Displaying Images:
Each image is a 64×64 pixel matrix, which is reshaped into a 4096×1 vector for processing. We created a function to recompose this matrix into 64×64 and used the 'subplot' function to display images.

### Calculation of Mean Face:
The mean face is calculated as the average of the training faces. The face image can be expressed as the sum of the mean face and its eigenfaces. We calculate the mean image and the associated centered image.

### Calculation of Face Features:
We decompose the matrix of centered images into singular values to extract the eigenfaces for each face. By plotting the cumulative sum of eigenvalues as a percentage, we determine the number of eigenfaces required for a good face reconstruction.

### Projection into Face Subspace:
We project faces into the subspace defined by the eigenfaces. We compute the coordinates of the projected image and the reconstruction error for different values of K.

### Face Identification:
We compare the projection of the test face with those of the training faces to identify the closest match. We calculate the distance between the projections for each training face.

### Face/Non-Face Classification:
We use the reconstruction error to verify if an image is a face or not. We calculate this error for training and test images, as well as for a non-face image database. This allows us to classify images into two categories: face and non-face.

### Conclusion
We could have used color images by representing pixels with three values (red, green, blue), but the concept and methodology remain the same.

And thus, I created my first facial recognition AI from a training database. This project allowed me to better understand the concept of facial recognition and reinforced my knowledge of image processing and linear algebra.

Here is [the code](https://github.com/yacine-baghli/IA-Facial-Recognition-Matlab.github.io/tree/main) of this project if you are interested.