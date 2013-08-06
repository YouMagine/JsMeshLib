JsMeshLib
=========

Javascript mesh library by Erik de Bruijn <erik@ultimaker.com>.

## Purpose
This program can convert large ASCII STL files into binary STLs, which in turn can be compressed before they are uploaded. This can convert a 99 MB ASCII file into an 18.8 MB file. File size reduction of more than a factor of 5 are commonly seen.

### Current state
To start with it only supports the STL file format. Compression is TBD. The program uses HTML5 web-workers, so it is very gentile on the user interface.

### TODOs
 - Implement pre-upload zipping
 - example: drag-n-drop area for files
 - Create server side tool for receiving a file
 - Gracefully handle absense of Web-Workers and TypedArrays
 - Possibly support other types of Meshes
 - Simplify meshes if lossy is accepted

### DONE
 - Setup initial project stucture and github repo
 - Setup code stubs
 - Create example page with using HTML5 File API
 - All time-consuming processing needs to happen asynchronously, web-workers are probably the only elegant way to go.
 - Create a binary STL writer in JS
 - Create a ascii STL parser in JS
 - Do lots of testing on large files (~ 100 MB ASCII works, 600MB fails due to memory shortage)
 - Do lots of optimizations on STL ascii to bin conversion

### NOT TODO
 - Check out jParser for parsing binary meshes: https://github.com/vjeux/jParser/
