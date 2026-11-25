var size = 0;
var placement = 'point';

var style_BahanPraktikumM1220261118ADMINISTRASIDESA_AR_25K_1 = function(feature, resolution) {
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
    var placement = 'point';

    var style = [new ol.style.Style({

        // Mengatur garis batas wilayah
       stroke: new ol.style.Stroke({
        color: 'rgba(35,78,112,1.0)',
        lineDash: [6, 4],
        lineCap: 'round',
        lineJoin: 'round',
        width: 1.5
       }),

        // Mengatur warna isi wilayah
        fill: new ol.style.Fill({
            color: 'rgba(245,233,154,0.65)'
        }),

        // Mengatur tulisan
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
