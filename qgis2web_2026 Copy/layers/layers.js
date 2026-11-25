var wms_layers = [];


        var lyr_pnvkarte_0 = new ol.layer.Tile({
            'title': 'Öpnvkarte',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.xn--pnvkarte-m4a.de/">© Öpnvkarte, CC-BY-SA</a>',
                url: 'https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png'
            })
        });
var format_BahanPraktikumM1220261118ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_BahanPraktikumM1220261118ADMINISTRASIDESA_AR_25K_1 = format_BahanPraktikumM1220261118ADMINISTRASIDESA_AR_25K_1.readFeatures(json_BahanPraktikumM1220261118ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BahanPraktikumM1220261118ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BahanPraktikumM1220261118ADMINISTRASIDESA_AR_25K_1.addFeatures(features_BahanPraktikumM1220261118ADMINISTRASIDESA_AR_25K_1);
var lyr_BahanPraktikumM1220261118ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BahanPraktikumM1220261118ADMINISTRASIDESA_AR_25K_1, 
                style: style_BahanPraktikumM1220261118ADMINISTRASIDESA_AR_25K_1,
                popuplayertitle: 'Bahan Praktikum M12-20261118 — ADMINISTRASIDESA_AR_25K',
                interactive: false,
                title: '<img src="styles/legend/BahanPraktikumM1220261118ADMINISTRASIDESA_AR_25K_1.png" /> Bahan Praktikum M12-20261118 — ADMINISTRASIDESA_AR_25K'
            });
var format_BahanPraktikumM1220261118JALAN_LN_25K_2 = new ol.format.GeoJSON();
var features_BahanPraktikumM1220261118JALAN_LN_25K_2 = format_BahanPraktikumM1220261118JALAN_LN_25K_2.readFeatures(json_BahanPraktikumM1220261118JALAN_LN_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BahanPraktikumM1220261118JALAN_LN_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BahanPraktikumM1220261118JALAN_LN_25K_2.addFeatures(features_BahanPraktikumM1220261118JALAN_LN_25K_2);
var lyr_BahanPraktikumM1220261118JALAN_LN_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BahanPraktikumM1220261118JALAN_LN_25K_2, 
                style: style_BahanPraktikumM1220261118JALAN_LN_25K_2,
                popuplayertitle: 'Bahan Praktikum M12-20261118 — JALAN_LN_25K',
                interactive: false,
                title: '<img src="styles/legend/BahanPraktikumM1220261118JALAN_LN_25K_2.png" /> Bahan Praktikum M12-20261118 — JALAN_LN_25K'
            });
var format_TempatBerkesan_3 = new ol.format.GeoJSON();
var features_TempatBerkesan_3 = format_TempatBerkesan_3.readFeatures(json_TempatBerkesan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatBerkesan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatBerkesan_3.addFeatures(features_TempatBerkesan_3);
var lyr_TempatBerkesan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatBerkesan_3, 
                style: style_TempatBerkesan_3,
                popuplayertitle: 'Tempat Berkesan',
                interactive: true,
                title: '<img src="styles/legend/TempatBerkesan_3.png" /> Tempat Berkesan'
            });

lyr_pnvkarte_0.setVisible(true);lyr_BahanPraktikumM1220261118ADMINISTRASIDESA_AR_25K_1.setVisible(true);lyr_BahanPraktikumM1220261118JALAN_LN_25K_2.setVisible(true);lyr_TempatBerkesan_3.setVisible(true);
var layersList = [lyr_pnvkarte_0,lyr_BahanPraktikumM1220261118ADMINISTRASIDESA_AR_25K_1,lyr_BahanPraktikumM1220261118JALAN_LN_25K_2,lyr_TempatBerkesan_3];
lyr_BahanPraktikumM1220261118ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BahanPraktikumM1220261118JALAN_LN_25K_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_TempatBerkesan_3.set('fieldAliases', {'NO': 'NO', 'NAMA': 'NAMA', 'LINTANG': 'LINTANG', 'BUJUR': 'BUJUR', 'X': 'X', 'Y': 'Y', 'DESKRIPSI': 'DESKRIPSI', 'PATH_FOTO': 'PATH_FOTO', 'LINK_FOTO': 'LINK_FOTO', });
lyr_BahanPraktikumM1220261118ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_BahanPraktikumM1220261118JALAN_LN_25K_2.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_TempatBerkesan_3.set('fieldImages', {'NO': 'Range', 'NAMA': 'TextEdit', 'LINTANG': 'TextEdit', 'BUJUR': 'TextEdit', 'X': 'Range', 'Y': 'Range', 'DESKRIPSI': 'TextEdit', 'PATH_FOTO': 'TextEdit', 'LINK_FOTO': 'TextEdit', });
lyr_BahanPraktikumM1220261118ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_BahanPraktikumM1220261118JALAN_LN_25K_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_TempatBerkesan_3.set('fieldLabels', {'NO': 'hidden field', 'NAMA': 'inline label - always visible', 'LINTANG': 'inline label - always visible', 'BUJUR': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'DESKRIPSI': 'inline label - always visible', 'PATH_FOTO': 'hidden field', 'LINK_FOTO': 'no label', });
lyr_TempatBerkesan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});