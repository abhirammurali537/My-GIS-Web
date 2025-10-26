var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TKBMBOUND_1 = new ol.format.GeoJSON();
var features_TKBMBOUND_1 = format_TKBMBOUND_1.readFeatures(json_TKBMBOUND_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TKBMBOUND_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TKBMBOUND_1.addFeatures(features_TKBMBOUND_1);
var lyr_TKBMBOUND_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TKBMBOUND_1, 
                style: style_TKBMBOUND_1,
                popuplayertitle: 'TKBMBOUND',
                interactive: true,
    title: 'TKBMBOUND<br />\
    <img src="styles/legend/TKBMBOUND_1_0.png" /> AMMAYARNADA<br />\
    <img src="styles/legend/TKBMBOUND_1_1.png" /> AZHAKATHU<br />\
    <img src="styles/legend/TKBMBOUND_1_2.png" /> DALAVAPURAM<br />\
    <img src="styles/legend/TKBMBOUND_1_3.png" /> DESAKKALLU<br />\
    <img src="styles/legend/TKBMBOUND_1_4.png" /> GUHANANDAPURAM<br />\
    <img src="styles/legend/TKBMBOUND_1_5.png" /> KUDAVOOR<br />\
    <img src="styles/legend/TKBMBOUND_1_6.png" /> MUTTATHU<br />\
    <img src="styles/legend/TKBMBOUND_1_7.png" /> NADAKKAVU<br />\
    <img src="styles/legend/TKBMBOUND_1_8.png" /> NJARAMMOODU<br />\
    <img src="styles/legend/TKBMBOUND_1_9.png" /> PALLIKKODI<br />\
    <img src="styles/legend/TKBMBOUND_1_10.png" /> PANAVILA<br />\
    <img src="styles/legend/TKBMBOUND_1_11.png" /> THEKKUMVILA<br />\
    <img src="styles/legend/TKBMBOUND_1_12.png" /> UDAYADITHYAPURAM<br />\
    <img src="styles/legend/TKBMBOUND_1_13.png" /> VADAKKEVILA<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_TKBMBOUND_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_TKBMBOUND_1];
lyr_TKBMBOUND_1.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', 'Population': 'Population', });
lyr_TKBMBOUND_1.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', 'Population': 'TextEdit', });
lyr_TKBMBOUND_1.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'inline label - always visible', 'LSGD': 'inline label - always visible', 'Ward_Name': 'inline label - always visible', 'Ward_No': 'inline label - always visible', 'Lsgd_Type': 'inline label - visible with data', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', 'Population': 'no label', });
lyr_TKBMBOUND_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});