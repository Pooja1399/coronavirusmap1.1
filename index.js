function updateMap() {
        console.log("Updating map with realtime data")
        fetch("/data.json")
                .then(response => response.json())
                .then(rsp => {
                        console.log(rsp.data)
                        rsp.data.forEach(element => {
                                //latitude = element.latitude;
                                //longitude = element.longitude;
                                Latitude = element.Latitude;
                                Longitude = element.Longitude;

                                cases=element.infected;
                                if(cases>255)
                                {
                                        color="rgb(255,0,0)";
                                }
                                else
                                {
                                        color='rgb(${cases},0,0)';
                                }

                                //MARK ON THE MAP
                                
                                new mapboxgl.Marker({
                                        draggable: false,
                                        color:color,
                                        })
                                        .setLngLat([Longitude, Latitude])
                                        .addTo(map);
                        });
                })
}
let interval=2000;
setInterval(updateMap,interval);
