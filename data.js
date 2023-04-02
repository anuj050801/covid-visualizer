function updatemap() {
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
            cases = element.infected;
            if(cases > 255){
                color = "rgb(255, 266, 0)";
            }
            else {
                color = `rgb(${cases}, 0, 0)`;
            }

            rec = element.recovered;
            if(rec > 50){
                color = "rgb(255, 255, 0)";
            }
            else {
                color = `rgb(${rec}, 0, 0)`;
            }

            


                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);

            });
        })


}

updatemap();