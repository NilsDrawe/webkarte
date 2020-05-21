var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_appgruenflaechen_parkanlagen_1 = new ol.format.GeoJSON();
var features_appgruenflaechen_parkanlagen_1 = format_appgruenflaechen_parkanlagen_1.readFeatures(json_appgruenflaechen_parkanlagen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_appgruenflaechen_parkanlagen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_appgruenflaechen_parkanlagen_1.addFeatures(features_appgruenflaechen_parkanlagen_1);
var lyr_appgruenflaechen_parkanlagen_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_appgruenflaechen_parkanlagen_1, 
                style: style_appgruenflaechen_parkanlagen_1,
                interactive: true,
                title: '<img src="styles/legend/appgruenflaechen_parkanlagen_1.png" /> app:gruenflaechen_parkanlagen'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_appgruenflaechen_parkanlagen_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_appgruenflaechen_parkanlagen_1];
lyr_appgruenflaechen_parkanlagen_1.set('fieldAliases', {'name': 'name', 'beschreibung': 'beschreibung', 'bild': 'bild', 'link': 'link', 'kategorie': 'kategorie', });
lyr_appgruenflaechen_parkanlagen_1.set('fieldImages', {'name': 'TextEdit', 'beschreibung': 'TextEdit', 'bild': 'TextEdit', 'link': 'TextEdit', 'kategorie': 'TextEdit', });
lyr_appgruenflaechen_parkanlagen_1.set('fieldLabels', {'name': 'inline label', 'beschreibung': 'inline label', 'bild': 'inline label', 'link': 'inline label', 'kategorie': 'inline label', });
lyr_appgruenflaechen_parkanlagen_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});