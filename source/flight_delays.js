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
    ],
    scales: [
        {
            name: "xScale",
            type: "linear",
            domain: {data: "flight_delays", field: "departureDelay"},
            range : "width",
            zero: false
        },
        {
            name: "yScale",
            type: "linear",
            domain: {data: "flight_delays", field: "arrivalDelay"},
            range: "height",
            zero: false
        }
    ],
    marks: [
        {
            type: "symbol",
            from: {data: "flight_delays"},
            encode: {
                enter: {
                    x: {field: "departureDelay", scale: "xScale"},
                    y: {field: "arrivalDelay", scale: "yScale"}
                }
            }
        }
    ],
    axes: [
        {
            scale: "xScale",
            orient: "bottom",
            title: "Departure Delay"
        },
        {
            scale: "yScale",
            orient: "left",
            title: "Arrival Delay"
        }
    ],
    title: {
            text: "Flight Arrival Delay vs Departure Delay",
            fontSize: 20,
            subtitle: "Values in minutes",
            subtitleFontSize: 16,
            align: "left",
            anchor: "start"
    }};

// create runtime
var runtime = vega.parse(spec);

// create view
var view = new vega.View(runtime)
                   .renderer("svg")
                   .initialize("#view")
                   .hover();

// run it
view.run();
