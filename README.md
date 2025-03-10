## Launch on Blocklet Server

[![Launch on Blocklet Server](https://assets.arcblock.io/icons/launch_on_blocklet_server.svg)](https://install.arcblock.io/launch?action=blocklet-install&meta_url=https%3A%2F%2Fgithub.com%2Fblocklet%2Fimage-service-playground%2Freleases%2Fdownload%2Fv0.1.4%2Fblocklet.json)

# Image Service Playground

A simple playground to help developers learn API from image server provided by blocklet server.

Image service provides a set of APIs to help developers to resize, crop, and convert images.

Available params:

- imageFilter: can be none, resize, crop
- w: width, can be integer from 0 ~ 2048
- h: height, can be integer from 0 ~ 2048
- t: top, can be integer
- l: left, can be integer
- q: quality, can be integer from 0 ~ 100
- f: format, can be png, jpeg, webp, avif
- m: mode, can be inside, outside, cover, fill, contain
- r: rotate, can be 0, 90, 180, 270
- p: progressive, can be 0, 1
- g: greyscale, can be 0, 1
- b: blur, can be any integer
- a: transparency, can be 0, 1
- n: negative, can be o, 1
- s: sharpen, can be any integer
