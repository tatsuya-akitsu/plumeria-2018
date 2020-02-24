function initialize() {
  var latlng = new google.maps.LatLng(35.634103,139.7095673,18.71);
  var myOptions = {
    zoom: 15,
    /*拡大比率*/
    center: latlng,
    /*表示枠内の中心点*/
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP /*表示タイプの指定*/
  };
  var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

  /*取得スタイルの貼り付け*/
  var styleOptions =
      [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#c4c4c4"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#f3db2e"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21},{"visibility":"on"}]},{"featureType":"poi.business","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#c31b67"},{"saturation":"12"},{"visibility":"on"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#cb7432"},{"lightness":"0"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#cb7432"},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#575757"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#999999"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
  ;

  var styleType = new google.maps.StyledMapType(styleOptions);
  map.mapTypes.set('map_canvas', styleType);
  map.setMapTypeId('map_canvas');

  /*アイコン設定▼*/
  var icon = new google.maps.MarkerImage('http://clf.naked-inc.com/slf/nagoyatvtower2016/img/map_icon.png',
                                         new google.maps.Size(50, 76), /*アイコンサイズ設定*/
                                         new google.maps.Point(0, 0) /*アイコン位置設定*/
                                        );
  var markerOptions = {
    position: latlng,
    map: map,
    icon: icon,
    title: 'Bar Plumeria'
  };
  var marker = new google.maps.Marker(markerOptions);
  /*アイコン設定ここまで▲*/
}

google.setOnLoadCallback(initialize);

(function (window, $, undefined) {
  //必要なコードはここから
  var _release = null;
  $('.target').on('pointerdown pointermove pointerup touchstart touchmove touchend mouseenter mouseleave',function(e){
    var $self = $(this);
    if(!$self.hasClass('release')){
      if( e.type=='mouseleave' || _release && (e.type.indexOf('touch') != -1 || e.type.indexOf('point') != -1 ) ){
        clearTimeout(_release);
      }
      if( e.type=='mouseenter' || e.type=='touchstart' || e.type=='pointerdown' ){
        _release = setTimeout(function(){
          $self.addClass('_release');
        }, 500 );
      }
    }
  });
  //ここまで
}(this, jQuery));