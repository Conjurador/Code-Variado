#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Jan 23 17:30:59 2020

@author: artur
"""

#import cv2
#import matplotlib.pyplot as plt
import os
import numpy as np
import cv2

# Parâmetros de
brightness = 250
contrast = 100
saturation = 0

def grayscale(mat, grade):
    grade = 1 - grade/100
    result = np.zeros(mat.shape)
    for i in range(len(mat)):
        row = mat[i]
        for j in range(len(row)):
            cell = row[j]
            mean = np.floor(cell.mean())
            result[i][j][0] += int( np.floor( (mean-cell[0])*grade + cell[0] ) )
            result[i][j][1] += int( np.floor( (mean-cell[1])*grade + cell[1] ) )
            result[i][j][2] += int( np.floor( (mean-cell[2])*grade + cell[2] ) )
    
    return np.uint8( result )

files = os.listdir()
# verify if directory 'generated' exists. If not then make it
if(not(os.path.isdir('./generated'))):
    os.mkdir('generated')

for file in files:
    # verify if file is a PNG or JPG
    if('.jpg' in file or '.png' in file):
        img = cv2.imread(file)
        img = np.int16(img)
        img = img * (contrast/127+1) - contrast + brightness
        img = np.clip(img, 0, 255)
        img = np.uint8(img)        
        
        if(file.find('.jpg') > 0):
            last_letter = file.find('.jpg')
            extension = '.jpg'
        elif(file.find('.png') > 0):
            last_letter = file.find('.png')
            extension = '.png'
        
        filename = file[:last_letter]
        adjusted = grayscale(img, saturation/100)
        cv2.imwrite('./generated/%s_brightness%d_contrast%d_saturation%d.%s' % (filename, brightness, contrast, saturation, extension), adjusted )
