# Berlin Diachron

I love maps. When i procrastinate i am actually often just hanging on Google Maps and exploring distant corners of the world. I also love history and i love coding. This project brings all three together. A neat little tool that overlays the map of Berlin with cartographic material from the last 400 years. See how the city grows and check out what your house looked like 100 years ago. 

## Functionality

- Through a toggable menu the user can activate different map layers that overlay the base map. 
- a fullscreen mode
- a geolocator to query the users location and zoom into it
- an opacity control to allow easy comparison between the basemap and the overlays

## Tech stack

it a simple react app that uses the leaflet.js library for the map parts. With react-leaflet.js it is easy to set up those maps in a react environment since it abstracts all leaflet entities like the actual map and a marker into react components. It provides also a couple of hooks to improve the DX. Leaflet actually has its own ecosystem of plugins of which i used some for the fullscreen mode, the geolocator and the opacity control

![alt text](https://www.guru99.com/images/3/free-photo-hosting-7.webp)
