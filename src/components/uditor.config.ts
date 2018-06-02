export class UeditorConfig {
    //为编辑器实例添加一个路径，这个不能被注释
    UEDITOR_HOME_URL: URL;

    // 服务器统一请求接口路径
    serverUrl = this.UEDITOR_HOME_URL + "php/controller.php";

    toolbars: string[];
    autoHeightEnabled = true;
    autoFloatEnabled = true;
}