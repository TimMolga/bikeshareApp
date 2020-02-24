$(document).ready(function () {
    $("#deviceTitle").click(function(){
        $("#deviceContent").toggle();
    });

    $("#weatherTitle").click(function(){
        $("#contentArea1").toggle();
    });

    $("#groupTitle").click(function(){
        $("#groupSizeContent").toggle();
    });

    $("#dockTitle").click(function(){
        $("#dockDistanceContent").toggle();
    });

    $("#bikeTitle").click(function(){
        $("#bikeDistanceContent").toggle();
    });

    $( "#groupList" ).change(function() {
        $("#contentArea2").empty();
        var groupNumber = $("#groupList option:selected").val();
        $(function () {
            $.getJSON("bikeshare.json", function (data) {
                data.stationBeanList.forEach(function (s) {
                    if (groupNumber == 1) {
                        if (s.availableBikes <= 5) {
                            $("#contentArea2").append(
                                '<h3>Station Name:</h3><p>' + s.stationName + '</p>' +
                                '<h3>Available Bikes:</h3><p>' + s.availableBikes + '</p><br><hr>'
                            );
                        }
                    }
                    else if (groupNumber == 2) {
                        if (s.availableBikes >= 5 && s.availableBikes <= 10) {
                            $("#contentArea2").append(
                                '<h3>Station Name:</h3><p>' + s.stationName + '</p>' +
                                '<h3>Available Bikes:</h3><p>' + s.availableBikes + '</p><br><hr>'
                            );
                        }
                    }
                    else if (groupNumber == 3) {
                        if (s.availableBikes >= 10 && s.availableBikes <= 15) {
                            $("#contentArea2").append(
                                '<h3>Station Name:</h3><p>' + s.stationName + '</p>' +
                                '<h3>Available Bikes:</h3><p>' + s.availableBikes + '</p><br><hr>'
                            );
                        }
                    }
                    else if (groupNumber == 4) {
                        if (s.availableBikes >= 15) {
                            $("#contentArea2").append(
                                '<h3>Station Name:</h3><p>' + s.stationName + '</p>' +
                                '<h3>Available Bikes:</h3><p>' + s.availableBikes + '</p><br><hr>'
                            );
                        }
                    }
                });
            });
        });
    });
    getLocation();

    $( "#dockDistanceList" ).change(function() {
    $("#contentArea3").empty();
        var dockDist = $("#dockDistanceList option:selected").val();
        $(function () {
    $.getJSON("bikeshare.json", function (data) {
        data.stationBeanList.forEach(function (s) {
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var latC = position.coords.latitude;
                    var lonC = position.coords.longitude;
                    var latD = s.latitude;
                    var lonD = s.longitude;
                    var distance = getNearby(latC, lonC, latD, lonD);
                    if (dockDist == 1) {
                        if (distance <= 10) {
                            if (s.availableDocks > 0) {
                                $("#contentArea3").append(
                                    '<h3>Station Name:</h3><p>' + s.stationName + '</p>' +
                                    '<h3>Available Docks:</h3><p>' + s.availableDocks + '</p><br><hr>'
                                );
                            }
                        }
                    }
                    else if (dockDist == 2) {
                        if (distance <= 20) {
                            if (s.availableDocks > 0) {
                                $("#contentArea3").append(
                                    '<h3>Station Name:</h3><p>' + s.stationName + '</p>' +
                                    '<h3>Available Docks:</h3><p>' + s.availableDocks + '</p><br><hr>'
                                );
                            }
                        }
                    }
                    else if (dockDist == 3) {
                        if (distance <= 30) {
                            if (s.availableDocks > 0) {
                                $("#contentArea3").append(
                                    '<h3>Station Name:</h3><p>' + s.stationName + '</p>' +
                                    '<h3>Available Docks:</h3><p>' + s.availableDocks + '</p><br><hr>'
                                );
                            }
                        }
                    }
                    else if (dockDist == 4) {
                        if (distance >= 40) {
                            if (s.availableDocks > 0) {
                                $("#contentArea3").append(
                                    '<h3>Station Name:</h3><p>' + s.stationName + '</p>' +
                                    '<h3>Available Docks:</h3><p>' + s.availableDocks + '</p><br><hr>'
                                );
                            }
                        }
                    }
                });
            }
        });
    });
        });
    });

    $( "#bikeDistanceList" ).change(function() {
    $("#contentArea4").empty();
        var bikeDist = $("#bikeDistanceList option:selected").val();
        $(function () {
    $.getJSON("bikeshare.json", function (data) {
        data.stationBeanList.forEach(function (s) {
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var latC = position.coords.latitude;
                    var lonC = position.coords.longitude;
                    var latD = s.latitude;
                    var lonD = s.longitude;
                    var distance = getNearby(latC, lonC, latD, lonD);
                    if (bikeDist == 1) {
                        if (distance <= 10) {
                            if (s.availableBikes > 0) {
                                $("#contentArea4").append(
                                    '<h3>Station Name:</h3><p>' + s.stationName + '</p>' +
                                    '<h3>Available Bikes:</h3><p>' + s.availableBikes + '</p><br><hr>'
                                );
                            }
                        }
                    }
                    else if (bikeDist == 2) {
                        if (distance <= 20) {
                            if (s.availableBikes > 0) {
                                $("#contentArea4").append(
                                    '<h3>Station Name:</h3><p>' + s.stationName + '</p>' +
                                    '<h3>Available Bikes:</h3><p>' + s.availableBikes + '</p><br><hr>'
                                );
                            }
                        }
                    }
                    else if (bikeDist == 3) {
                        if (distance <= 30) {
                            if (s.availableBikes > 0) {
                                $("#contentArea4").append(
                                    '<h3>Station Name:</h3><p>' + s.stationName + '</p>' +
                                    '<h3>Available Bikes:</h3><p>' + s.availableBikes + '</p><br><hr>'
                                );
                            }
                        }
                    }
                    else if (bikeDist == 4) {
                        if (distance >= 40) {
                            if (s.availableBikes > 0) {
                                $("#contentArea4").append(
                                    '<h3>Station Name:</h3><p>' + s.stationName + '</p>' +
                                    '<h3>Available Bikes:</h3><p>' + s.availableBikes + '</p><br><hr>'
                                );
                            }
                        }
                    }
                });
            }
        });
    });
});
    });
});

function getLocation() {

    navigator.geolocation.getCurrentPosition
    (onSuccess, onError, { enableHighAccuracy: true });
}

var onSuccess = function (position) {

    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;

    getCurrentWeather(Latitude, Longitude);
}


function getCurrentWeather(lat, long) {

    var weatherKey = "29bcde99d0ca37c47176d45c8b3cf928";

    var location =
        'http://api.openweathermap.org/data/2.5/weather?lat='
        + lat + '&lon=' + long + '&appid=' + weatherKey + '&units=imperial';

    $.getJSON(location, function (results) {

        if (results.weather.length) {

            $.getJSON(location, function (results) {

                if (results.weather.length) {
                    var celsius = (results.main.temp - 32) * (5/9)
                    $('#contentArea1').append("<strong>Location:</strong> " + results.name + "<br><strong>Temperature:</strong> "
                        + celsius.toFixed(2) +  " C<br><strong>Windspeed:</strong> " + results.wind.speed + " m/s<br><strong>Humidity:</strong> "
                        + results.main.humidity +"%<br>");
                }

            });
        }
    }).fail(function () {
        console.log("error getting location");
    });
}

function onError(error) {
    console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}

function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
    window.addEventListener("batterystatus", onBatteryStatus, false);

    function onBatteryStatus(info) {
        if (info.isPlugged = false) {
            $("#deviceInformation1").append('Your phone battery is at ' + info.level + '%. Your phone is charging.<br>')
        }
        else{
            $("#deviceInformation1").append('Your phone battery is at ' + info.level + '%. Plug in your phone to charge it.<br>')
        }
    }
    $("#deviceInformation2").append("<strong>Device Model:</strong> " + device.model + "<br><strong>Device Platform:</strong> " + device.platform +
        "<br><strong>Device Manufacturer:</strong> " + device.manufacturer + "<br>");
    checkConnection();
}

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';
    $("#deviceInformation3").append("<strong>Connection Type:</strong> " + states[networkState] + "<br>");
}

function getNearby(latitudeCurrent, longitudeCurrent, latitudeDistance, longitudeDistance) {

    var latCurrent = latitudeCurrent;
    var longCurrent = longitudeCurrent;
    var latDistance = latitudeDistance;
    var longDistance = longitudeDistance;

    var R = 6372.8;

    var dLat = Deg2Rad(latDistance - latCurrent);
    var dLng = Deg2Rad(longDistance - longCurrent);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(Deg2Rad(latCurrent)) * Math.cos(Deg2Rad(latDistance)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d.toFixed(2);

    function Deg2Rad(deg) {
        return deg * Math.PI / 180;
    }
};
