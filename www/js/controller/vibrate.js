angular.module('vibratepage', [])
    .controller('VibrateCtrl', function ($scope) {
        $scope.Click = function () {
            navigator.vibrate(3000);
        };
    })
 

angular.module('camerapage', [])
    .controller('CameraCtrl', function ($scope) {
        $scope.Camerapicture = function () {
           navigator.camera.getPicture(onSuccess, onFail, {
               quality: 50,
               destinationType: Camera.DestinationType.FILE_URI,
               sourceType: CAMERA,
               saveToPhotoAlbum: true,
           });

           function onSuccess(imageURI) {
               var image = document.getElementById('myImage');
               image.src = imageURI;
               
           }

           function onFail(message) {
               alert('Failed because: ' + message);
           }
this.camera.getPicture(this.cameraOptions).then((imageData) => {
                 let image = 'data:image/jpeg;base64,' + imageData;
                 return image;
             });
           }
        
        $scope.getPictures = function () {
        window.imagePicker.getPictures(
            function (results) {
                for (var i = 0; i < results.length; i++) {
                    console.log('Image URI: ' + results[i]); 
                    this.image = imageSource.replace('file://', '');
                }
            },
            function (error) {
                console.log('Error: ' + error);
            });

        function hasReadPermission() {
            window.imagePicker.hasReadPermission(
                function (result) {
                    // if this is 'false' you probably want to call 'requestReadPermission' now
                    alert(result);
                }
            )
        }

        function requestReadPermission() {
            // no callbacks required as this opens a popup which returns async
            window.imagePicker.requestReadPermission();
        }

    }

    })

 
angular.module('getpicture', [])
.controller('GetCtrl', function ($scope) {
    $scope.getPictures = function () {
        window.imagePicker.getPictures(
            function (results) {
                for (var i = 0; i < results.length; i++) {
                    console.log('Image URI: ' + results[i]);
                    alert(results[i]);

                }
            },
            function (error) {
                console.log('Error: ' + error);
            });

        function hasReadPermission() {
            window.imagePicker.hasReadPermission(
                function (result) {
                    // if this is 'false' you probably want to call 'requestReadPermission' now
                    alert(result);
                }
            )
        }

        function requestReadPermission() {
            // no callbacks required as this opens a popup which returns async
            window.imagePicker.requestReadPermission();
        }

    }
});

angular.module('smspage', [])
.controller('SmsCtrl', function ($scope) {
    $scope.sendSMS = function () {
        function checkSMSPermission() {
            var success = function (hasPermission) {
                if (hasPermission) {
                    sms.send(function () {
                        var number = document.getElementById('numberTxt').value.toString(); /* iOS: ensure number is actually a string */
                        var message = document.getElementById('messageTxt').value;
                        console.log("number=" + number + ", message= " + message);

                        //CONFIGURATION
                        var options = {
                            replaceLineBreaks: false, // true to replace \n by a new line, false by default
                            android: {
                                intent: 'INTENT' // send SMS with the native android SMS messaging
                                //intent: '' // send SMS without open any other app
                            }
                        };

                        var success = function () {
                            alert('Message sent successfully');
                        };
                        var error = function (e) {
                            alert('Message Failed:' + e);
                        };
                        sms.send(number, message, options, success, error);
                    });
                } else {
                    // show a helpful message to explain why you need to require the permission to send a SMS
                    // read http://developer.android.com/training/permissions/requesting.html#explain for more best practices
                }
            };
            var error = function (e) {
                alert('Something went wrong:' + e);
            };
            sms.hasPermission(success, error);
        }

        function requestSMSPermission() {
            var success = function (hasPermission) {
                if (!hasPermission) {
                    sms.requestPermission(function () {
                        console.log('[OK] Permission accepted')
                    }, function (error) {
                        console.info('[WARN] Permission not accepted')
                        // Handle permission not accepted
                    })
                }
            };
            var error = function (e) {
                alert('Something went wrong:' + e);
            };
            sms.hasPermission(success, error);
        }
    };
})


angular.module('date', [])
    .controller('DateCtrl', function ($scope) {

        var options = {
            date: new Date(),
            mode: 'date'
        };

        function onSuccess(date) {
            alert('Selected date: ' + date);
        }

        function onError(error) { // Android only 
            alert('Error: ' + error);
        }

        datePicker.show(options, onSuccess, onError);
    });