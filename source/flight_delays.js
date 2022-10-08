// create spec
var spec = {
    width: 500,
    height: 500,
    padding: 50,
    data: [
        {
            url: "https://raw.githubusercontent.com/picoral/csc-444-data/main/flight_delay.json",
            name: "flight_delays"
        }
    ]};

// create runtime
var runtime = vega.parse(spec);

// create view
var view = new vega.View(runtime)
                   .renderer("svg")
                   .initialize("#view")
                   .hover();

// run it
view.run();
