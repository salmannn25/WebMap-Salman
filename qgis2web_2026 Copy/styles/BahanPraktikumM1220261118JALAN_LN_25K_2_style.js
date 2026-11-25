var size = 0;
var placement = 'line';

var style_BahanPraktikumM1220261118JALAN_LN_25K_2 = function(feature, resolution) {
    var context = {
        feature: feature,
        variables: {}
    };

    var labelText = "";
    var value = feature.get("");
    var labelFont = "10px Arial, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#ffffff";
    var bufferWidth = 2;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'line';

    var style = [new ol.style.Style({

        // Warna dan ketebalan garis jalan
        stroke: new ol.style.Stroke({
            color: 'rgba(196,122,50,1.0)',
            lineDash: null,
            lineCap: 'round',
            lineJoin: 'round',
            width: 1.5
        }),

        // Pengaturan label jalan
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
