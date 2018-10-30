#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Oct 30 13:21:18 2018

@author: Artur
"""

import tkinter as tk
from tkinter import ttk
from tkinter import filedialog

class Application(tk.Tk):
    def __init__(self, master=None):
#        tk.Frame.__init__(self, master);
        tk.Tk.__init__(self);
        self.grid();
        self.createWidgets();
        self.menu_bar = tk.Menu(self)
        self.config(menu=self.menu_bar)

        self.file_menu = tk.Menu(self.menu_bar, tearoff=0)
        self.file_menu.add_command(label="Load image", command=self._load)
        self.file_menu.add_separator()
        self.file_menu.add_command(label="Exit", command=self._quit)
        self.menu_bar.add_cascade(label="File", menu=self.file_menu)

        self.photo = tk.PhotoImage(file='img/dice.png');
        self.label = tk.Label(self, image=self.photo);
        #label = tk.Label(win, text='photo');
        self.label.grid(column=0, row=0);

    def _load(self):
        path = tk.filedialog.askopenfilename(title="Selecione uma imagem",filetypes=(('Imagem',"*.jpg"),('Imagem',"*.jpeg"),('Imagem',"*.png"),('todos os arquivos',"*.*")));
        self.photo = tk.PhotoImage(file=path);
#        self.label.image=self.photo;
        self.label = tk.Label(self, image=self.photo);
        self.label.grid(column=0, row=0);

    def _quit(self):
        self.quit();
        self.destroy();
        exit();
        
    def createWidgets(self):
#        self.quitButton = tk.Button(self, text='Quit', command=self.quit);
        self.quitButton = tk.Button(self, text='Quit', command=self.destroy);
        self.quitButton.grid();

app = Application();
#app.master.title('Sample application');
app.mainloop();
