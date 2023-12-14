var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_MERGEDPL19_1 = new ol.format.GeoJSON();
var features_MERGEDPL19_1 = format_MERGEDPL19_1.readFeatures(json_MERGEDPL19_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MERGEDPL19_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MERGEDPL19_1.addFeatures(features_MERGEDPL19_1);
var lyr_MERGEDPL19_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MERGEDPL19_1, 
                style: style_MERGEDPL19_1,
                interactive: true,
    title: 'MERGED PL 19<br />\
    <img src="styles/legend/MERGEDPL19_1_0.png" /> Fasilitas Budaya dan Hiburan<br />\
    <img src="styles/legend/MERGEDPL19_1_1.png" /> Fasilitas Transportasi<br />\
    <img src="styles/legend/MERGEDPL19_1_2.png" /> Komersial<br />\
    <img src="styles/legend/MERGEDPL19_1_3.png" /> PEMUKIMAN FIX<br />\
    <img src="styles/legend/MERGEDPL19_1_4.png" /> PENDIDIKAN<br />\
    <img src="styles/legend/MERGEDPL19_1_5.png" /> VEGETASI<br />'
        });
var format_JALANSHP_2 = new ol.format.GeoJSON();
var features_JALANSHP_2 = format_JALANSHP_2.readFeatures(json_JALANSHP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALANSHP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALANSHP_2.addFeatures(features_JALANSHP_2);
var lyr_JALANSHP_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALANSHP_2, 
                style: style_JALANSHP_2,
                interactive: true,
                title: '<img src="styles/legend/JALANSHP_2.png" /> JALAN SHP'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_MERGEDPL19_1.setVisible(true);lyr_JALANSHP_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_MERGEDPL19_1,lyr_JALANSHP_2];
lyr_MERGEDPL19_1.set('fieldAliases', {'id': 'id', 'PL_2019': 'PL_2019', 'PL_2023': 'PL_2023', 'Perubahan': 'Perubahan', 'Luas': 'Luas', });
lyr_JALANSHP_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'LUAS': 'LUAS', });
lyr_MERGEDPL19_1.set('fieldImages', {'id': 'TextEdit', 'PL_2019': 'TextEdit', 'PL_2023': 'TextEdit', 'Perubahan': 'TextEdit', 'Luas': 'TextEdit', });
lyr_JALANSHP_2.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'LUAS': '', });
lyr_MERGEDPL19_1.set('fieldLabels', {'id': 'inline label', 'PL_2019': 'inline label', 'PL_2023': 'inline label', 'Perubahan': 'inline label', 'Luas': 'inline label', });
lyr_JALANSHP_2.set('fieldLabels', {'NAMRJL': 'inline label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'LUAS': 'no label', });
lyr_JALANSHP_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});