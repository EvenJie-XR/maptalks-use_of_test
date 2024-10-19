import { MaptalksUtils } from "./MaptalksUtils";

/**
 * MaptalksHelper的单例模式类
 */
export class SingletonMaptalksHelper {
    private static _instance: MaptalksUtils | undefined
    private constructor() {
        
    }
    /**
     * 初始化MaptalksHelper实例
     * @param containerId Maptalks渲染用的容器id
     * @returns 
     */
    static initInstance(containerId: string) {
        if( !this._instance ) {
            this._instance = new MaptalksUtils(containerId);
        }
        return this._instance;
    }
    /**
     * 获取MaptalksHelper实例
     * @returns 
     */
    static getInstance() {
        if( !this._instance ) {
            throw new Error("调用getInstance之前需要先调用initInstance初始化实例");
        } else {
            return this._instance;
        }
    }
    /**
     * 销毁MaptalksHelper实例
     */
    static disposeInstance() {
        if( !this._instance ) {
            throw new Error("调用disposeInstance之前需要先调用initInstance初始化实例");
        } else {
            this._instance = undefined;
        }
    }
}