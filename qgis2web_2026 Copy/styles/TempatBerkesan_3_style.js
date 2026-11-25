var size = 0;
var placement = 'point';

var style_TempatBerkesan_3 = function(feature, resolution) {
    var context = {
        feature: feature,
        variables: {}
    };

    var labelText = "";
    var value = feature.get("");
    var labelFont = "10px 'Arial', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#ffffff";
    var bufferWidth = 3.0;
    var textAlign = 'left';
    var offsetX = 10;
    var offsetY = 5;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';

    if (feature.get("NAMA") !== null) {
        labelText = String(feature.get("NAMA"));
    }

    var style = [new ol.style.Style({
        image: new ol.style.Icon({
            imgSize: [700, 700],
            scale: 0.08,
            anchor: [350.0, 350.0],
            anchorXUnits: "pixels",
            anchorYUnits: "pixels",
            rotation: 0.0,
            src: "styles/red-marker.svg"
        }),

        text: createTextStyle(
            feature,
            resolution,
            labelText,
            labelFont,
            labelFill,
            placement,
            bufferColor,
            bufferWidth,
            textAlign,
            offsetX,
            offsetY,
            overflow,
            repeat
        )
    })];

    return style;
};
