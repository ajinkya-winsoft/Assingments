
app.service('Resource', function($resource) {

       this.Map = $resource('js/data/network-map.json',{},
              {
                loadMap: { method: "GET", params: {} },

              });

        this.MapLiveTraffic = $resource('data/port-stats-consolidated.json',{},
              {
                  MapLiveTraffic : {method: "POST", params :{} },
              });
});
