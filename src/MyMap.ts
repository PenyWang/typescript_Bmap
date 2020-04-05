interface MapableObj {
  longitude: number;
  latitude: number;
  content: string;
}

export default class MyMap {

  private Point = null;
  private map = null;

  /**
   * map init center point
   * @param longitude 
   * @param latitude 
   */
  constructor ( longitude: string, latitude: string ) {
    this.Point = new BMap.Point( parseFloat(longitude), parseFloat(latitude) );
  }

  /**
   * 将地图渲染到指定div上
   * @param divId 地图挂载的dom元素
   */
  render( divId: string, zoom?: number ){
    this.map = new BMap.Map(divId);
    this.map.centerAndZoom(this.Point, zoom);
  }

  /**
   * 添加覆盖物
   * @param mapableObj 符合地图要求的对象
   */
  addMarker(mapableObj: MapableObj){
    let point = new BMap.Point(mapableObj.longitude, mapableObj.latitude);
    let marker = new BMap.Marker(point);
    this.map.addOverlay(marker);

    marker.onclick = () => {
      this.openInfoWindow(mapableObj);
    }
  }

  /**
   * 打开信息窗口
   * @param mapableObj 符合地图要求的对象
   */
  openInfoWindow(mapableObj: MapableObj) {
    let infoWindow = new BMap.InfoWindow(mapableObj.content, {
      offset: new BMap.Size(0, -10)
    });
    this.map.openInfoWindow(infoWindow, new BMap.Point(mapableObj.longitude, mapableObj.latitude));
  }

}