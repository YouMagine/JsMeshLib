/*
 * JsMeshLib JavaScript Mesh Library v0.1
 * 
 * Copyright 2013, Erik de Bruijn
 * 
 * Parts are based on Bruno Barbieri's JIC.js which is found here:
 * https://github.com/brunobar79/J-I-C/
 */


/**
 * Create the meshLib object.
 * @constructor
 */

var meshLib = {
        /**
         * Receives a File Object (STL) and returns a new File Object compressed
         * @param {Blob} source_obj The source File Object
         * @return {Boolean} Returns true if it is an ASCII STL file.
         */
        isAsciiSTL: function(source_obj){
            // TODO detect type
            return false;

        },

        /**
         * Receives a File Object (STL) and returns a new File Object compressed
         * @param {Blob} source_obj The source File Object
         * @return {Blob} result_obj The compressed STL Object
         */
        asciiToBinarySTL: function(source_obj){
             // var cvs = document.createElement('canvas');
             // cvs.width = source_img_obj.naturalWidth;
             // cvs.height = source_img_obj.naturalHeight;
             // var ctx = cvs.getContext("2d").drawImage(source_img_obj, 0, 0);
             // var newImageData = cvs.toDataURL("image/jpeg", quality);
             // var result_obj = new Image();
             // result_obj.src = newImageData;
             return result_obj;
        },

        /**
         * Receives an Image Object and upload it to the server via ajax
         * @param {Image} compressed_obj The Compressed File Object
         * @param {String} The server side url to send the POST request
         * @param {String} file_input_name The name of the input that the server will receive with the file
         * @param {String} filename The name of the file that will be sent to the server
         * @param {function} the callback to trigger when the upload is finished.
         */

        uploadSTL: function(compressed_obj, upload_url, file_input_name, filename, callback){

            //ADD sendAsBinary compatibilty to older browsers
            if (XMLHttpRequest.prototype.sendAsBinary === undefined) {
                XMLHttpRequest.prototype.sendAsBinary = function(string) {
                    var bytes = Array.prototype.map.call(string, function(c) {
                        return c.charCodeAt(0) & 0xff;
                    });
                    this.send(new Uint8Array(bytes).buffer);
                };
            }

            var type= 'image/jpeg';// FIXME:  change this
            var data = cvs.toDataURL(type);// FIXME: we're not dealing with a canvas...
            data = data.replace('data:' + type + ';base64,', '');

            var xhr = new XMLHttpRequest();
            xhr.open('POST', upload_url, true);
            var boundary = 'someboundary';

            xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);
            xhr.sendAsBinary(['--' + boundary, 'Content-Disposition: form-data; name="' + file_input_name + '"; filename="' + filename + '"', 'Content-Type: ' + type, '', atob(data), '--' + boundary + '--'].join('\r\n'));

            xhr.onreadystatechange = function() {
                if (this.readyState == 4 && this.status==200) {
                    callback(this.responseText);
                }
            };


        }
};