define([
  "dojo/_base/declare",
  "jimu/BaseWidget",
  "esri/widgets/ElevationProfile",
], function (declare, BaseWidget, ElevationProfile) {
  return declare([BaseWidget], {
    baseClass: "jimu-widget-elevationprofile",

    startup: function () {
      this.inherited(arguments);

      // Create the elevation profile widget
      this.profileWidget = new ElevationProfile({
        view: this.sceneView,
        container: this.profileNode,
        url: "https://elevation.arcgis.com/arcgis/rest/services/Tools/ElevationSync/GPServer",
        profileTaskName: "Profile",
        visibleElements: {
          selectButton: true,
          sketchButton: true,
          unitsButton: true,
        },
      });
    },
  });
});
